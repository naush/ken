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
           var tmp3569 = result__;
           var result__ = tmp3569.feed;
           var tmp3568 = result__;
           var result__ = tmp3568.entry;
           var tmp3567 = result__;
           var result__ = tmp3567;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll248) {
             coll248 = coll248.reverse();
             function processOne134() {
               var result;
               result = coll248.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll248.length > 0) processOne134(); else rest134();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll248.length > 0) processOne134(); else rest134();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll248.length > 0) processOne134(); else rest134();
                     
                   }
                 }
               }
             }
             function rest134() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll248.length > 0) processOne134(); else rest134();
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
  keywords.split(",", 1000).list(function(coll252) {
    coll252 = coll252.reverse();
    function processOne135() {
      var keyword;
      keyword = coll252.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp3570 = result__;
        var result__ = tmp3570;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll253) {
            coll253 = coll253.reverse();
            function processOne136() {
              var podcast;
              podcast = coll253.pop();
              var result__ = podcast.title != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll253.length > 0) processOne136(); else rest136();
                
              } else {
                {
                  
                  if(coll253.length > 0) processOne136(); else rest136();
                  
                }
              }
            }
            function rest136() {
              
              if(coll252.length > 0) processOne135(); else rest135();
              
            }
            if(coll253.length > 0) processOne136(); else rest136();
          });
          
        } else {
          {
            
            if(coll252.length > 0) processOne135(); else rest135();
            
          }
        }
      });
    }
    function rest135() {
      podcasts.count(function(result__) {
        var tmp3572 = result__;
        var result__ = tmp3572 == 0;
        var tmp3571 = result__;
        var result__ = tmp3571;
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
    if(coll252.length > 0) processOne135(); else rest135();
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
  var root1639 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp3496 = mobl.ref(null);
  
  var nodes1286 = $("<span>");
  root1639.append(nodes1286);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp3496, function(_, callback) {
    var root1640 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3494 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp3495 = mobl.ref(mobl._("Back", []));
    
    var nodes1287 = $("<span>");
    root1640.append(nodes1287);
    subs__.addSub((ui.backButton)(tmp3495, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3494, function(_, callback) {
      var root1641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1641); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1287;
      nodes1287 = node.contents();
      oldNodes.replaceWith(nodes1287);
    }));
    callback(root1640); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1286;
    nodes1286 = node.contents();
    oldNodes.replaceWith(nodes1286);
  }));
  
  var tmp3518 = mobl.ref(null);
  
  
  var tmp3517 = mobl.ref(null);
  
  
  var tmp3516 = mobl.ref(null);
  
  
  var tmp3515 = mobl.ref(null);
  
  var nodes1288 = $("<span>");
  root1639.append(nodes1288);
  subs__.addSub((mobl.block)(tmp3515, tmp3516, tmp3517, tmp3518, function(_, callback) {
    var root1642 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3500 = mobl.ref(false);
    
    
    var tmp3499 = mobl.ref(null);
    
    
    var tmp3498 = mobl.ref(null);
    
    var nodes1289 = $("<span>");
    root1642.append(nodes1289);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3498, tmp3499, tmp3500, function(_, callback) {
      var root1643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3497 = mobl.ref("_blank");
      
      var nodes1290 = $("<span>");
      root1643.append(nodes1290);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp3497, function(_, callback) {
        var root1644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1290;
        nodes1290 = node.contents();
        oldNodes.replaceWith(nodes1290);
      }));
      callback(root1643); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1289;
      nodes1289 = node.contents();
      oldNodes.replaceWith(nodes1289);
    }));
    
    var tmp3514 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp3514.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node378 = $("<span>");
    root1642.append(node378);
    var condSubs93 = new mobl.CompSubscription();
    subs__.addSub(condSubs93);
    var oldValue93;
    var renderCond93 = function() {
      var value169 = tmp3514.get();
      if(oldValue93 === value169) return;
      oldValue93 = value169;
      var subs__ = condSubs93;
      subs__.unsubscribe();
      node378.empty();
      if(value169) {
        
        var tmp3506 = mobl.ref(false);
        
        
        var tmp3505 = mobl.ref(null);
        
        
        var tmp3504 = mobl.ref(null);
        
        var nodes1291 = $("<span>");
        node378.append(nodes1291);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3504, tmp3505, tmp3506, function(_, callback) {
          var root1645 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp3501 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp3501.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp3501.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp3503 = mobl.ref(null);
          
          
          var tmp3502 = mobl.ref(null);
          
          var nodes1292 = $("<span>");
          root1645.append(nodes1292);
          subs__.addSub((mobl.label)(tmp3501, tmp3502, tmp3503, function(_, callback) {
            var root1646 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1646); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1292;
            nodes1292 = node.contents();
            oldNodes.replaceWith(nodes1292);
          }));
          callback(root1645); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1291;
          nodes1291 = node.contents();
          oldNodes.replaceWith(nodes1291);
        }));
        
        var tmp3513 = mobl.ref(false);
        
        
        var tmp3512 = mobl.ref(null);
        
        
        var tmp3511 = mobl.ref(null);
        
        var nodes1293 = $("<span>");
        node378.append(nodes1293);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3511, tmp3512, tmp3513, function(_, callback) {
          var root1647 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp3508 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp3507 = mobl.ref("Play");
          
          var nodes1294 = $("<span>");
          root1647.append(nodes1294);
          subs__.addSub((ui.button)(tmp3507, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3508, function(_, callback) {
            var root1648 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1648); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1294;
            nodes1294 = node.contents();
            oldNodes.replaceWith(nodes1294);
          }));
          
          var tmp3510 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp3509 = mobl.ref("Pause");
          
          var nodes1295 = $("<span>");
          root1647.append(nodes1295);
          subs__.addSub((ui.button)(tmp3509, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3510, function(_, callback) {
            var root1649 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1649); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1295;
            nodes1295 = node.contents();
            oldNodes.replaceWith(nodes1295);
          }));
          callback(root1647); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1293;
          nodes1293 = node.contents();
          oldNodes.replaceWith(nodes1293);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond93();
    subs__.addSub(tmp3514.addEventListener('change', function() {
      renderCond93();
    }));
    
    callback(root1642); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1288;
    nodes1288 = node.contents();
    oldNodes.replaceWith(nodes1288);
  }));
  callback(root1639); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root1650 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3548 = mobl.ref(null);
  
  
  var tmp3547 = mobl.ref(null);
  
  
  var tmp3546 = mobl.ref(null);
  
  
  var tmp3545 = mobl.ref(null);
  
  var nodes1296 = $("<span>");
  root1650.append(nodes1296);
  subs__.addSub((mobl.block)(tmp3545, tmp3546, tmp3547, tmp3548, function(_, callback) {
    var root1651 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3527 = mobl.ref(false);
    
    
    var tmp3526 = mobl.ref(null);
    
    
    var tmp3525 = mobl.ref(null);
    
    var nodes1297 = $("<span>");
    root1651.append(nodes1297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3525, tmp3526, tmp3527, function(_, callback) {
      var root1652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3519 = mobl.ref(120);
      
      
      var tmp3524 = mobl.ref(null);
      
      
      var tmp3523 = mobl.ref(null);
      
      
      var tmp3522 = mobl.ref(null);
      
      
      var tmp3521 = mobl.ref(null);
      
      
      var tmp3520 = mobl.ref(null);
      
      var nodes1298 = $("<span>");
      root1652.append(nodes1298);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp3519, tmp3520, tmp3521, tmp3522, tmp3523, tmp3524, function(_, callback) {
        var root1653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1653); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1298;
        nodes1298 = node.contents();
        oldNodes.replaceWith(nodes1298);
      }));
      callback(root1652); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1297;
      nodes1297 = node.contents();
      oldNodes.replaceWith(nodes1297);
    }));
    
    var tmp3533 = mobl.ref(false);
    
    
    var tmp3532 = mobl.ref(null);
    
    
    var tmp3531 = mobl.ref(null);
    
    var nodes1299 = $("<span>");
    root1651.append(nodes1299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3531, tmp3532, tmp3533, function(_, callback) {
      var root1654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3528 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp3528.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp3530 = mobl.ref(null);
      
      
      var tmp3529 = mobl.ref(null);
      
      var nodes1300 = $("<span>");
      root1654.append(nodes1300);
      subs__.addSub((mobl.label)(tmp3528, tmp3529, tmp3530, function(_, callback) {
        var root1655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1300;
        nodes1300 = node.contents();
        oldNodes.replaceWith(nodes1300);
      }));
      callback(root1654); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1299;
      nodes1299 = node.contents();
      oldNodes.replaceWith(nodes1299);
    }));
    
    var tmp3539 = mobl.ref(false);
    
    
    var tmp3538 = mobl.ref(null);
    
    
    var tmp3537 = mobl.ref(null);
    
    var nodes1301 = $("<span>");
    root1651.append(nodes1301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3537, tmp3538, tmp3539, function(_, callback) {
      var root1656 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3534 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp3534.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp3536 = mobl.ref(null);
      
      
      var tmp3535 = mobl.ref(null);
      
      var nodes1302 = $("<span>");
      root1656.append(nodes1302);
      subs__.addSub((mobl.label)(tmp3534, tmp3535, tmp3536, function(_, callback) {
        var root1657 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1657); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1302;
        nodes1302 = node.contents();
        oldNodes.replaceWith(nodes1302);
      }));
      callback(root1656); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1301;
      nodes1301 = node.contents();
      oldNodes.replaceWith(nodes1301);
    }));
    
    var tmp3544 = mobl.ref(false);
    
    
    var tmp3543 = mobl.ref(null);
    
    
    var tmp3542 = mobl.ref(null);
    
    var nodes1303 = $("<span>");
    root1651.append(nodes1303);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3542, tmp3543, tmp3544, function(_, callback) {
      var root1658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3540 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp3540.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp3541 = mobl.ref("_blank");
      
      var nodes1304 = $("<span>");
      root1658.append(nodes1304);
      subs__.addSub((mobl.link)(tmp3540, tmp3541, function(_, callback) {
        var root1659 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1659); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1304;
        nodes1304 = node.contents();
        oldNodes.replaceWith(nodes1304);
      }));
      callback(root1658); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1303;
      nodes1303 = node.contents();
      oldNodes.replaceWith(nodes1303);
    }));
    callback(root1651); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1296;
    nodes1296 = node.contents();
    oldNodes.replaceWith(nodes1296);
  }));
  
  var tmp3560 = mobl.ref(null);
  
  
  var tmp3559 = mobl.ref(null);
  
  
  var tmp3558 = mobl.ref(null);
  
  
  var tmp3557 = mobl.ref(null);
  
  var nodes1305 = $("<span>");
  root1650.append(nodes1305);
  subs__.addSub((mobl.block)(tmp3557, tmp3558, tmp3559, tmp3560, function(_, callback) {
    var root1660 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3549 = mobl.ref("Episodes");
    
    
    var tmp3550 = mobl.ref(null);
    
    var nodes1306 = $("<span>");
    root1660.append(nodes1306);
    subs__.addSub((ui.header)(tmp3549, tmp3550, function(_, callback) {
      var root1661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1661); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1306;
      nodes1306 = node.contents();
      oldNodes.replaceWith(nodes1306);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp3556 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp3573 = result__;
          var result__ = tmp3573;
          tmp3556.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp3574 = result__;
          var result__ = tmp3574;
          tmp3556.set(result__);
          
        });
      }));
      
      
      var node379 = mobl.loadingSpan();
      root1660.append(node379);
      var list103;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList103 = function() {
        var subs__ = listSubs__;
        list103 = tmp3556.get();
        list103.list(function(results538) {
          node379.empty();
          for(var i103 = 0; i103 < results538.length; i103++) {
            (function() {
              var iternode103 = $("<span>");
              node379.append(iternode103);
              var episode;
              episode = mobl.ref(mobl.ref(results538), i103);
              
              var tmp3553 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp3575 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp3555 = mobl.ref(false);
              
              
              var tmp3554 = mobl.ref(null);
              
              var nodes1307 = $("<span>");
              iternode103.append(nodes1307);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3553, tmp3554, tmp3555, function(_, callback) {
                var root1662 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp3552 = mobl.ref(null);
                
                
                var tmp3551 = mobl.ref(null);
                
                var nodes1308 = $("<span>");
                root1662.append(nodes1308);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp3551, tmp3552, function(_, callback) {
                  var root1663 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1663); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1308;
                  nodes1308 = node.contents();
                  oldNodes.replaceWith(nodes1308);
                }));
                callback(root1662); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1307;
                nodes1307 = node.contents();
                oldNodes.replaceWith(nodes1307);
              }));
              
              var oldNodes = iternode103;
              iternode103 = iternode103.contents();
              oldNodes.replaceWith(iternode103);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
          subs__.addSub(tmp3556.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
        });
      };
      renderList103();
      
      callback(root1660); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1305;
    nodes1305 = node.contents();
    oldNodes.replaceWith(nodes1305);
  }));
  callback(root1650); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root1664 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3561 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp3561.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp3561.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp3563 = mobl.ref(null);
  
  
  var tmp3562 = mobl.ref(null);
  
  var nodes1309 = $("<span>");
  root1664.append(nodes1309);
  subs__.addSub((mobl.label)(tmp3561, tmp3562, tmp3563, function(_, callback) {
    var root1665 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1665); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1309;
    nodes1309 = node.contents();
    oldNodes.replaceWith(nodes1309);
  }));
  callback(root1664); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp3578 = result__;
    var result__ = tmp3578.name;
    var tmp3577 = result__;
    var result__ = mobl.alert(tmp3577);
    var tmp3576 = result__;
    models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
      var tmp3579 = result__;
      var result__ = tmp3579;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    });
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root1666 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp3580 = result__;
      var result__ = tmp3580;
      podcasts.set(result__);
      
    });
    
    var tmp3565 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp3581 = result__;
                           var result__ = tmp3581;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp3582 = result__;
                               var result__ = tmp3582;
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
    
    
    var tmp3564 = mobl.ref("Refresh");
    
    var nodes1310 = $("<span>");
    root1666.append(nodes1310);
    subs__.addSub((ui.button)(tmp3564, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3565, function(_, callback) {
      var root1667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1667); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1310;
      nodes1310 = node.contents();
      oldNodes.replaceWith(nodes1310);
    }));
    
    var tmp3566 = mobl.ref("Loading...");
    
    var nodes1311 = $("<span>");
    root1666.append(nodes1311);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp3566, function(_, callback) {
      var root1668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1312 = $("<span>");
      root1668.append(nodes1312);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root1669 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1669); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1312;
        nodes1312 = node.contents();
        oldNodes.replaceWith(nodes1312);
      }));
      callback(root1668); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1311;
      nodes1311 = node.contents();
      oldNodes.replaceWith(nodes1311);
    }));
    callback(root1666); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll254) {
    coll254 = coll254.reverse();
    function processOne137() {
      var podcast;
      podcast = coll254.pop();
      var result__ = front.add(podcast);
      
      if(coll254.length > 0) processOne137(); else rest137();
      
    }
    function rest137() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll254.length > 0) processOne137(); else rest137();
  });
  
};

