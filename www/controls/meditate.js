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
           var tmp3480 = result__;
           var result__ = tmp3480.feed;
           var tmp3479 = result__;
           var result__ = tmp3479.entry;
           var tmp3478 = result__;
           var result__ = tmp3478;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll244) {
             coll244 = coll244.reverse();
             function processOne130() {
               var result;
               result = coll244.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll244.length > 0) processOne130(); else rest130();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll244.length > 0) processOne130(); else rest130();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll244.length > 0) processOne130(); else rest130();
                     
                   }
                 }
               }
             }
             function rest130() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll244.length > 0) processOne130(); else rest130();
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
  keywords.split(",", 1000).list(function(coll245) {
    coll245 = coll245.reverse();
    function processOne131() {
      var keyword;
      keyword = coll245.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp3481 = result__;
        var result__ = tmp3481;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll246) {
            coll246 = coll246.reverse();
            function processOne132() {
              var podcast;
              podcast = coll246.pop();
              var result__ = podcast.title != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll246.length > 0) processOne132(); else rest132();
                
              } else {
                {
                  
                  if(coll246.length > 0) processOne132(); else rest132();
                  
                }
              }
            }
            function rest132() {
              
              if(coll245.length > 0) processOne131(); else rest131();
              
            }
            if(coll246.length > 0) processOne132(); else rest132();
          });
          
        } else {
          {
            
            if(coll245.length > 0) processOne131(); else rest131();
            
          }
        }
      });
    }
    function rest131() {
      podcasts.count(function(result__) {
        var tmp3483 = result__;
        var result__ = tmp3483 == 0;
        var tmp3482 = result__;
        var result__ = tmp3482;
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
    if(coll245.length > 0) processOne131(); else rest131();
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
  var root1608 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp3407 = mobl.ref(null);
  
  var nodes1259 = $("<span>");
  root1608.append(nodes1259);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp3407, function(_, callback) {
    var root1609 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3405 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp3406 = mobl.ref(mobl._("Back", []));
    
    var nodes1260 = $("<span>");
    root1609.append(nodes1260);
    subs__.addSub((ui.backButton)(tmp3406, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3405, function(_, callback) {
      var root1610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1610); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1260;
      nodes1260 = node.contents();
      oldNodes.replaceWith(nodes1260);
    }));
    callback(root1609); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1259;
    nodes1259 = node.contents();
    oldNodes.replaceWith(nodes1259);
  }));
  
  var tmp3429 = mobl.ref(null);
  
  
  var tmp3428 = mobl.ref(null);
  
  
  var tmp3427 = mobl.ref(null);
  
  
  var tmp3426 = mobl.ref(null);
  
  var nodes1261 = $("<span>");
  root1608.append(nodes1261);
  subs__.addSub((mobl.block)(tmp3426, tmp3427, tmp3428, tmp3429, function(_, callback) {
    var root1611 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3411 = mobl.ref(false);
    
    
    var tmp3410 = mobl.ref(null);
    
    
    var tmp3409 = mobl.ref(null);
    
    var nodes1262 = $("<span>");
    root1611.append(nodes1262);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3409, tmp3410, tmp3411, function(_, callback) {
      var root1612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3408 = mobl.ref("_blank");
      
      var nodes1263 = $("<span>");
      root1612.append(nodes1263);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp3408, function(_, callback) {
        var root1613 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1613); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1263;
        nodes1263 = node.contents();
        oldNodes.replaceWith(nodes1263);
      }));
      callback(root1612); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1262;
      nodes1262 = node.contents();
      oldNodes.replaceWith(nodes1262);
    }));
    
    var tmp3425 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp3425.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node376 = $("<span>");
    root1611.append(node376);
    var condSubs92 = new mobl.CompSubscription();
    subs__.addSub(condSubs92);
    var oldValue92;
    var renderCond92 = function() {
      var value168 = tmp3425.get();
      if(oldValue92 === value168) return;
      oldValue92 = value168;
      var subs__ = condSubs92;
      subs__.unsubscribe();
      node376.empty();
      if(value168) {
        
        var tmp3417 = mobl.ref(false);
        
        
        var tmp3416 = mobl.ref(null);
        
        
        var tmp3415 = mobl.ref(null);
        
        var nodes1264 = $("<span>");
        node376.append(nodes1264);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3415, tmp3416, tmp3417, function(_, callback) {
          var root1614 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp3412 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp3412.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp3412.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp3414 = mobl.ref(null);
          
          
          var tmp3413 = mobl.ref(null);
          
          var nodes1265 = $("<span>");
          root1614.append(nodes1265);
          subs__.addSub((mobl.label)(tmp3412, tmp3413, tmp3414, function(_, callback) {
            var root1615 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1615); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1265;
            nodes1265 = node.contents();
            oldNodes.replaceWith(nodes1265);
          }));
          callback(root1614); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1264;
          nodes1264 = node.contents();
          oldNodes.replaceWith(nodes1264);
        }));
        
        var tmp3424 = mobl.ref(false);
        
        
        var tmp3423 = mobl.ref(null);
        
        
        var tmp3422 = mobl.ref(null);
        
        var nodes1266 = $("<span>");
        node376.append(nodes1266);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3422, tmp3423, tmp3424, function(_, callback) {
          var root1616 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp3419 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp3418 = mobl.ref("Play");
          
          var nodes1267 = $("<span>");
          root1616.append(nodes1267);
          subs__.addSub((ui.button)(tmp3418, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3419, function(_, callback) {
            var root1617 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1617); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1267;
            nodes1267 = node.contents();
            oldNodes.replaceWith(nodes1267);
          }));
          
          var tmp3421 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp3420 = mobl.ref("Pause");
          
          var nodes1268 = $("<span>");
          root1616.append(nodes1268);
          subs__.addSub((ui.button)(tmp3420, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3421, function(_, callback) {
            var root1618 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1618); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1268;
            nodes1268 = node.contents();
            oldNodes.replaceWith(nodes1268);
          }));
          callback(root1616); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1266;
          nodes1266 = node.contents();
          oldNodes.replaceWith(nodes1266);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond92();
    subs__.addSub(tmp3425.addEventListener('change', function() {
      renderCond92();
    }));
    
    callback(root1611); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1261;
    nodes1261 = node.contents();
    oldNodes.replaceWith(nodes1261);
  }));
  callback(root1608); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root1619 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3459 = mobl.ref(null);
  
  
  var tmp3458 = mobl.ref(null);
  
  
  var tmp3457 = mobl.ref(null);
  
  
  var tmp3456 = mobl.ref(null);
  
  var nodes1269 = $("<span>");
  root1619.append(nodes1269);
  subs__.addSub((mobl.block)(tmp3456, tmp3457, tmp3458, tmp3459, function(_, callback) {
    var root1620 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3438 = mobl.ref(false);
    
    
    var tmp3437 = mobl.ref(null);
    
    
    var tmp3436 = mobl.ref(null);
    
    var nodes1270 = $("<span>");
    root1620.append(nodes1270);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3436, tmp3437, tmp3438, function(_, callback) {
      var root1621 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3430 = mobl.ref(120);
      
      
      var tmp3435 = mobl.ref(null);
      
      
      var tmp3434 = mobl.ref(null);
      
      
      var tmp3433 = mobl.ref(null);
      
      
      var tmp3432 = mobl.ref(null);
      
      
      var tmp3431 = mobl.ref(null);
      
      var nodes1271 = $("<span>");
      root1621.append(nodes1271);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp3430, tmp3431, tmp3432, tmp3433, tmp3434, tmp3435, function(_, callback) {
        var root1622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1271;
        nodes1271 = node.contents();
        oldNodes.replaceWith(nodes1271);
      }));
      callback(root1621); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1270;
      nodes1270 = node.contents();
      oldNodes.replaceWith(nodes1270);
    }));
    
    var tmp3444 = mobl.ref(false);
    
    
    var tmp3443 = mobl.ref(null);
    
    
    var tmp3442 = mobl.ref(null);
    
    var nodes1272 = $("<span>");
    root1620.append(nodes1272);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3442, tmp3443, tmp3444, function(_, callback) {
      var root1623 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3439 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp3439.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp3441 = mobl.ref(null);
      
      
      var tmp3440 = mobl.ref(null);
      
      var nodes1273 = $("<span>");
      root1623.append(nodes1273);
      subs__.addSub((mobl.label)(tmp3439, tmp3440, tmp3441, function(_, callback) {
        var root1624 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1624); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1273;
        nodes1273 = node.contents();
        oldNodes.replaceWith(nodes1273);
      }));
      callback(root1623); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1272;
      nodes1272 = node.contents();
      oldNodes.replaceWith(nodes1272);
    }));
    
    var tmp3450 = mobl.ref(false);
    
    
    var tmp3449 = mobl.ref(null);
    
    
    var tmp3448 = mobl.ref(null);
    
    var nodes1274 = $("<span>");
    root1620.append(nodes1274);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3448, tmp3449, tmp3450, function(_, callback) {
      var root1625 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3445 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp3445.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp3447 = mobl.ref(null);
      
      
      var tmp3446 = mobl.ref(null);
      
      var nodes1275 = $("<span>");
      root1625.append(nodes1275);
      subs__.addSub((mobl.label)(tmp3445, tmp3446, tmp3447, function(_, callback) {
        var root1626 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1626); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1275;
        nodes1275 = node.contents();
        oldNodes.replaceWith(nodes1275);
      }));
      callback(root1625); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1274;
      nodes1274 = node.contents();
      oldNodes.replaceWith(nodes1274);
    }));
    
    var tmp3455 = mobl.ref(false);
    
    
    var tmp3454 = mobl.ref(null);
    
    
    var tmp3453 = mobl.ref(null);
    
    var nodes1276 = $("<span>");
    root1620.append(nodes1276);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3453, tmp3454, tmp3455, function(_, callback) {
      var root1627 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3451 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp3451.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp3452 = mobl.ref("_blank");
      
      var nodes1277 = $("<span>");
      root1627.append(nodes1277);
      subs__.addSub((mobl.link)(tmp3451, tmp3452, function(_, callback) {
        var root1628 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1628); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1277;
        nodes1277 = node.contents();
        oldNodes.replaceWith(nodes1277);
      }));
      callback(root1627); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1276;
      nodes1276 = node.contents();
      oldNodes.replaceWith(nodes1276);
    }));
    callback(root1620); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1269;
    nodes1269 = node.contents();
    oldNodes.replaceWith(nodes1269);
  }));
  
  var tmp3471 = mobl.ref(null);
  
  
  var tmp3470 = mobl.ref(null);
  
  
  var tmp3469 = mobl.ref(null);
  
  
  var tmp3468 = mobl.ref(null);
  
  var nodes1278 = $("<span>");
  root1619.append(nodes1278);
  subs__.addSub((mobl.block)(tmp3468, tmp3469, tmp3470, tmp3471, function(_, callback) {
    var root1629 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3460 = mobl.ref("Episodes");
    
    
    var tmp3461 = mobl.ref(null);
    
    var nodes1279 = $("<span>");
    root1629.append(nodes1279);
    subs__.addSub((ui.header)(tmp3460, tmp3461, function(_, callback) {
      var root1630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1630); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1279;
      nodes1279 = node.contents();
      oldNodes.replaceWith(nodes1279);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp3467 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp3484 = result__;
          var result__ = tmp3484;
          tmp3467.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp3485 = result__;
          var result__ = tmp3485;
          tmp3467.set(result__);
          
        });
      }));
      
      
      var node377 = mobl.loadingSpan();
      root1629.append(node377);
      var list102;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList102 = function() {
        var subs__ = listSubs__;
        list102 = tmp3467.get();
        list102.list(function(results534) {
          node377.empty();
          for(var i102 = 0; i102 < results534.length; i102++) {
            (function() {
              var iternode102 = $("<span>");
              node377.append(iternode102);
              var episode;
              episode = mobl.ref(mobl.ref(results534), i102);
              
              var tmp3464 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp3486 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp3466 = mobl.ref(false);
              
              
              var tmp3465 = mobl.ref(null);
              
              var nodes1280 = $("<span>");
              iternode102.append(nodes1280);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3464, tmp3465, tmp3466, function(_, callback) {
                var root1631 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp3463 = mobl.ref(null);
                
                
                var tmp3462 = mobl.ref(null);
                
                var nodes1281 = $("<span>");
                root1631.append(nodes1281);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp3462, tmp3463, function(_, callback) {
                  var root1632 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1632); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1281;
                  nodes1281 = node.contents();
                  oldNodes.replaceWith(nodes1281);
                }));
                callback(root1631); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1280;
                nodes1280 = node.contents();
                oldNodes.replaceWith(nodes1280);
              }));
              
              var oldNodes = iternode102;
              iternode102 = iternode102.contents();
              oldNodes.replaceWith(iternode102);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
          subs__.addSub(tmp3467.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
        });
      };
      renderList102();
      
      callback(root1629); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1278;
    nodes1278 = node.contents();
    oldNodes.replaceWith(nodes1278);
  }));
  callback(root1619); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root1633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3472 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp3472.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp3472.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp3474 = mobl.ref(null);
  
  
  var tmp3473 = mobl.ref(null);
  
  var nodes1282 = $("<span>");
  root1633.append(nodes1282);
  subs__.addSub((mobl.label)(tmp3472, tmp3473, tmp3474, function(_, callback) {
    var root1634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1634); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1282;
    nodes1282 = node.contents();
    oldNodes.replaceWith(nodes1282);
  }));
  callback(root1633); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp3489 = result__;
    var result__ = tmp3489.name;
    var tmp3488 = result__;
    var result__ = mobl.alert(tmp3488);
    var tmp3487 = result__;
    models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
      var tmp3490 = result__;
      var result__ = tmp3490;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    });
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root1635 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp3491 = result__;
      var result__ = tmp3491;
      podcasts.set(result__);
      
    });
    
    var tmp3476 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp3492 = result__;
                           var result__ = tmp3492;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp3493 = result__;
                               var result__ = tmp3493;
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
    
    
    var tmp3475 = mobl.ref("Refresh");
    
    var nodes1283 = $("<span>");
    root1635.append(nodes1283);
    subs__.addSub((ui.button)(tmp3475, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3476, function(_, callback) {
      var root1636 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1636); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1283;
      nodes1283 = node.contents();
      oldNodes.replaceWith(nodes1283);
    }));
    
    var tmp3477 = mobl.ref("Loading...");
    
    var nodes1284 = $("<span>");
    root1635.append(nodes1284);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp3477, function(_, callback) {
      var root1637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1285 = $("<span>");
      root1637.append(nodes1285);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root1638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1638); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1285;
        nodes1285 = node.contents();
        oldNodes.replaceWith(nodes1285);
      }));
      callback(root1637); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1284;
      nodes1284 = node.contents();
      oldNodes.replaceWith(nodes1284);
    }));
    callback(root1635); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll247) {
    coll247 = coll247.reverse();
    function processOne133() {
      var podcast;
      podcast = coll247.pop();
      var result__ = front.add(podcast);
      
      if(coll247.length > 0) processOne133(); else rest133();
      
    }
    function rest133() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll247.length > 0) processOne133(); else rest133();
  });
  
};

