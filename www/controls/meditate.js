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
           var tmp8824 = result__;
           var result__ = tmp8824.feed;
           var tmp8823 = result__;
           var result__ = tmp8823.entry;
           var tmp8822 = result__;
           var result__ = tmp8822;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll446) {
             coll446 = coll446.reverse();
             function processOne256() {
               var result;
               result = coll446.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll446.length > 0) processOne256(); else rest256();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll446.length > 0) processOne256(); else rest256();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll446.length > 0) processOne256(); else rest256();
                     
                   }
                 }
               }
             }
             function rest256() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll446.length > 0) processOne256(); else rest256();
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
  keywords.split(",", 1000).list(function(coll447) {
    coll447 = coll447.reverse();
    function processOne257() {
      var keyword;
      keyword = coll447.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp8825 = result__;
        var result__ = tmp8825;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll448) {
            coll448 = coll448.reverse();
            function processOne258() {
              var podcast;
              podcast = coll448.pop();
              var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
              
              if(coll448.length > 0) processOne258(); else rest258();
              
            }
            function rest258() {
              
              if(coll447.length > 0) processOne257(); else rest257();
              
            }
            if(coll448.length > 0) processOne258(); else rest258();
          });
          
        } else {
          {
            
            if(coll447.length > 0) processOne257(); else rest257();
            
          }
        }
      });
    }
    function rest257() {
      podcasts.count(function(result__) {
        var tmp8827 = result__;
        var result__ = tmp8827 == 0;
        var tmp8826 = result__;
        var result__ = tmp8826;
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
    if(coll447.length > 0) processOne257(); else rest257();
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
  var root4020 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp8751 = mobl.ref(null);
  
  var nodes3277 = $("<span>");
  root4020.append(nodes3277);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp8751, function(_, callback) {
    var root4021 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8749 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8750 = mobl.ref(mobl._("Back", []));
    
    var nodes3278 = $("<span>");
    root4021.append(nodes3278);
    subs__.addSub((ui.backButton)(tmp8750, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8749, function(_, callback) {
      var root4022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3278;
      nodes3278 = node.contents();
      oldNodes.replaceWith(nodes3278);
    }));
    callback(root4021); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3277;
    nodes3277 = node.contents();
    oldNodes.replaceWith(nodes3277);
  }));
  
  var tmp8773 = mobl.ref(null);
  
  
  var tmp8772 = mobl.ref(null);
  
  
  var tmp8771 = mobl.ref(null);
  
  
  var tmp8770 = mobl.ref(null);
  
  var nodes3279 = $("<span>");
  root4020.append(nodes3279);
  subs__.addSub((mobl.block)(tmp8770, tmp8771, tmp8772, tmp8773, function(_, callback) {
    var root4023 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8755 = mobl.ref(false);
    
    
    var tmp8754 = mobl.ref(null);
    
    
    var tmp8753 = mobl.ref(null);
    
    var nodes3280 = $("<span>");
    root4023.append(nodes3280);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8753, tmp8754, tmp8755, function(_, callback) {
      var root4024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8752 = mobl.ref("_blank");
      
      var nodes3281 = $("<span>");
      root4024.append(nodes3281);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp8752, function(_, callback) {
        var root4025 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4025); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3281;
        nodes3281 = node.contents();
        oldNodes.replaceWith(nodes3281);
      }));
      callback(root4024); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3280;
      nodes3280 = node.contents();
      oldNodes.replaceWith(nodes3280);
    }));
    
    var tmp8769 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp8769.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node757 = $("<span>");
    root4023.append(node757);
    var condSubs217 = new mobl.CompSubscription();
    subs__.addSub(condSubs217);
    var oldValue217;
    var renderCond217 = function() {
      var value349 = tmp8769.get();
      if(oldValue217 === value349) return;
      oldValue217 = value349;
      var subs__ = condSubs217;
      subs__.unsubscribe();
      node757.empty();
      if(value349) {
        
        var tmp8761 = mobl.ref(false);
        
        
        var tmp8760 = mobl.ref(null);
        
        
        var tmp8759 = mobl.ref(null);
        
        var nodes3282 = $("<span>");
        node757.append(nodes3282);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8759, tmp8760, tmp8761, function(_, callback) {
          var root4026 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8756 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp8756.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp8756.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp8758 = mobl.ref(null);
          
          
          var tmp8757 = mobl.ref(null);
          
          var nodes3283 = $("<span>");
          root4026.append(nodes3283);
          subs__.addSub((mobl.label)(tmp8756, tmp8757, tmp8758, function(_, callback) {
            var root4027 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4027); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3283;
            nodes3283 = node.contents();
            oldNodes.replaceWith(nodes3283);
          }));
          callback(root4026); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3282;
          nodes3282 = node.contents();
          oldNodes.replaceWith(nodes3282);
        }));
        
        var tmp8768 = mobl.ref(false);
        
        
        var tmp8767 = mobl.ref(null);
        
        
        var tmp8766 = mobl.ref(null);
        
        var nodes3284 = $("<span>");
        node757.append(nodes3284);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8766, tmp8767, tmp8768, function(_, callback) {
          var root4028 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8763 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8762 = mobl.ref("Play");
          
          var nodes3285 = $("<span>");
          root4028.append(nodes3285);
          subs__.addSub((ui.button)(tmp8762, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8763, function(_, callback) {
            var root4029 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4029); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3285;
            nodes3285 = node.contents();
            oldNodes.replaceWith(nodes3285);
          }));
          
          var tmp8765 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8764 = mobl.ref("Pause");
          
          var nodes3286 = $("<span>");
          root4028.append(nodes3286);
          subs__.addSub((ui.button)(tmp8764, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8765, function(_, callback) {
            var root4030 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4030); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3286;
            nodes3286 = node.contents();
            oldNodes.replaceWith(nodes3286);
          }));
          callback(root4028); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3284;
          nodes3284 = node.contents();
          oldNodes.replaceWith(nodes3284);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond217();
    subs__.addSub(tmp8769.addEventListener('change', function() {
      renderCond217();
    }));
    
    callback(root4023); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3279;
    nodes3279 = node.contents();
    oldNodes.replaceWith(nodes3279);
  }));
  callback(root4020); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root4031 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8803 = mobl.ref(null);
  
  
  var tmp8802 = mobl.ref(null);
  
  
  var tmp8801 = mobl.ref(null);
  
  
  var tmp8800 = mobl.ref(null);
  
  var nodes3287 = $("<span>");
  root4031.append(nodes3287);
  subs__.addSub((mobl.block)(tmp8800, tmp8801, tmp8802, tmp8803, function(_, callback) {
    var root4032 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8782 = mobl.ref(false);
    
    
    var tmp8781 = mobl.ref(null);
    
    
    var tmp8780 = mobl.ref(null);
    
    var nodes3288 = $("<span>");
    root4032.append(nodes3288);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8780, tmp8781, tmp8782, function(_, callback) {
      var root4033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8774 = mobl.ref(120);
      
      
      var tmp8779 = mobl.ref(null);
      
      
      var tmp8778 = mobl.ref(null);
      
      
      var tmp8777 = mobl.ref(null);
      
      
      var tmp8776 = mobl.ref(null);
      
      
      var tmp8775 = mobl.ref(null);
      
      var nodes3289 = $("<span>");
      root4033.append(nodes3289);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp8774, tmp8775, tmp8776, tmp8777, tmp8778, tmp8779, function(_, callback) {
        var root4034 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4034); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3289;
        nodes3289 = node.contents();
        oldNodes.replaceWith(nodes3289);
      }));
      callback(root4033); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3288;
      nodes3288 = node.contents();
      oldNodes.replaceWith(nodes3288);
    }));
    
    var tmp8788 = mobl.ref(false);
    
    
    var tmp8787 = mobl.ref(null);
    
    
    var tmp8786 = mobl.ref(null);
    
    var nodes3290 = $("<span>");
    root4032.append(nodes3290);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8786, tmp8787, tmp8788, function(_, callback) {
      var root4035 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8783 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8783.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp8785 = mobl.ref(null);
      
      
      var tmp8784 = mobl.ref(null);
      
      var nodes3291 = $("<span>");
      root4035.append(nodes3291);
      subs__.addSub((mobl.label)(tmp8783, tmp8784, tmp8785, function(_, callback) {
        var root4036 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4036); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3291;
        nodes3291 = node.contents();
        oldNodes.replaceWith(nodes3291);
      }));
      callback(root4035); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3290;
      nodes3290 = node.contents();
      oldNodes.replaceWith(nodes3290);
    }));
    
    var tmp8794 = mobl.ref(false);
    
    
    var tmp8793 = mobl.ref(null);
    
    
    var tmp8792 = mobl.ref(null);
    
    var nodes3292 = $("<span>");
    root4032.append(nodes3292);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8792, tmp8793, tmp8794, function(_, callback) {
      var root4037 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8789 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp8789.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp8791 = mobl.ref(null);
      
      
      var tmp8790 = mobl.ref(null);
      
      var nodes3293 = $("<span>");
      root4037.append(nodes3293);
      subs__.addSub((mobl.label)(tmp8789, tmp8790, tmp8791, function(_, callback) {
        var root4038 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4038); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3293;
        nodes3293 = node.contents();
        oldNodes.replaceWith(nodes3293);
      }));
      callback(root4037); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3292;
      nodes3292 = node.contents();
      oldNodes.replaceWith(nodes3292);
    }));
    
    var tmp8799 = mobl.ref(false);
    
    
    var tmp8798 = mobl.ref(null);
    
    
    var tmp8797 = mobl.ref(null);
    
    var nodes3294 = $("<span>");
    root4032.append(nodes3294);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8797, tmp8798, tmp8799, function(_, callback) {
      var root4039 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8795 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8795.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp8796 = mobl.ref("_blank");
      
      var nodes3295 = $("<span>");
      root4039.append(nodes3295);
      subs__.addSub((mobl.link)(tmp8795, tmp8796, function(_, callback) {
        var root4040 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4040); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3295;
        nodes3295 = node.contents();
        oldNodes.replaceWith(nodes3295);
      }));
      callback(root4039); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3294;
      nodes3294 = node.contents();
      oldNodes.replaceWith(nodes3294);
    }));
    callback(root4032); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3287;
    nodes3287 = node.contents();
    oldNodes.replaceWith(nodes3287);
  }));
  
  var tmp8815 = mobl.ref(null);
  
  
  var tmp8814 = mobl.ref(null);
  
  
  var tmp8813 = mobl.ref(null);
  
  
  var tmp8812 = mobl.ref(null);
  
  var nodes3296 = $("<span>");
  root4031.append(nodes3296);
  subs__.addSub((mobl.block)(tmp8812, tmp8813, tmp8814, tmp8815, function(_, callback) {
    var root4041 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8804 = mobl.ref("Episodes");
    
    
    var tmp8805 = mobl.ref(null);
    
    var nodes3297 = $("<span>");
    root4041.append(nodes3297);
    subs__.addSub((ui.header)(tmp8804, tmp8805, function(_, callback) {
      var root4042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4042); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3297;
      nodes3297 = node.contents();
      oldNodes.replaceWith(nodes3297);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp8811 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8828 = result__;
          var result__ = tmp8828;
          tmp8811.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8829 = result__;
          var result__ = tmp8829;
          tmp8811.set(result__);
          
        });
      }));
      
      
      var node758 = mobl.loadingSpan();
      root4041.append(node758);
      var list210;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList210 = function() {
        var subs__ = listSubs__;
        list210 = tmp8811.get();
        list210.list(function(results537) {
          node758.empty();
          for(var i213 = 0; i213 < results537.length; i213++) {
            (function() {
              var iternode210 = $("<span>");
              node758.append(iternode210);
              var episode;
              episode = mobl.ref(mobl.ref(results537), i213);
              
              var tmp8808 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp8830 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp8810 = mobl.ref(false);
              
              
              var tmp8809 = mobl.ref(null);
              
              var nodes3298 = $("<span>");
              iternode210.append(nodes3298);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8808, tmp8809, tmp8810, function(_, callback) {
                var root4043 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp8807 = mobl.ref(null);
                
                
                var tmp8806 = mobl.ref(null);
                
                var nodes3299 = $("<span>");
                root4043.append(nodes3299);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp8806, tmp8807, function(_, callback) {
                  var root4044 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4044); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3299;
                  nodes3299 = node.contents();
                  oldNodes.replaceWith(nodes3299);
                }));
                callback(root4043); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3298;
                nodes3298 = node.contents();
                oldNodes.replaceWith(nodes3298);
              }));
              
              var oldNodes = iternode210;
              iternode210 = iternode210.contents();
              oldNodes.replaceWith(iternode210);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list210.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
          subs__.addSub(tmp8811.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
        });
      };
      renderList210();
      
      callback(root4041); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3296;
    nodes3296 = node.contents();
    oldNodes.replaceWith(nodes3296);
  }));
  callback(root4031); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root4045 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8816 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp8816.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp8816.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp8818 = mobl.ref(null);
  
  
  var tmp8817 = mobl.ref(null);
  
  var nodes3300 = $("<span>");
  root4045.append(nodes3300);
  subs__.addSub((mobl.label)(tmp8816, tmp8817, tmp8818, function(_, callback) {
    var root4046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4046); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3300;
    nodes3300 = node.contents();
    oldNodes.replaceWith(nodes3300);
  }));
  callback(root4045); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp8831 = result__;
    var result__ = tmp8831;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root4047 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var event = mobl.ref(result__);
    
    var keywords = mobl.ref(event.get() ? event.get().keywords : "jazz");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
      var tmp8832 = result__;
      var result__ = tmp8832;
      podcasts.set(result__);
      
    });
    
    var tmp8820 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ui.startLoading("Loading...", ui.progressStyle);
                         controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
                           var tmp8833 = result__;
                           var result__ = tmp8833;
                           podcasts.set(result__);
                           var result__ = ui.endLoading();
                           if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp8819 = mobl.ref("Refresh search results");
    
    var nodes3301 = $("<span>");
    root4047.append(nodes3301);
    subs__.addSub((ui.button)(tmp8819, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8820, function(_, callback) {
      var root4048 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4048); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3301;
      nodes3301 = node.contents();
      oldNodes.replaceWith(nodes3301);
    }));
    
    var tmp8821 = mobl.ref("Loading...");
    
    var nodes3302 = $("<span>");
    root4047.append(nodes3302);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8821, function(_, callback) {
      var root4049 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3303 = $("<span>");
      root4049.append(nodes3303);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root4050 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4050); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3303;
        nodes3303 = node.contents();
        oldNodes.replaceWith(nodes3303);
      }));
      callback(root4049); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3302;
      nodes3302 = node.contents();
      oldNodes.replaceWith(nodes3302);
    }));
    callback(root4047); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll449) {
    coll449 = coll449.reverse();
    function processOne259() {
      var podcast;
      podcast = coll449.pop();
      var result__ = front.add(podcast);
      
      if(coll449.length > 0) processOne259(); else rest259();
      
    }
    function rest259() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll449.length > 0) processOne259(); else rest259();
  });
  
};

