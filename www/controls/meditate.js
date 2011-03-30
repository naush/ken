mobl.provides('controls.meditate');
mobl.provides('mobl');
mobl.provides('models');

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
           var tmp4522 = result__;
           var result__ = tmp4522.feed;
           var tmp4521 = result__;
           var result__ = tmp4521.entry;
           var tmp4520 = result__;
           var result__ = tmp4520;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll131) {
             coll131 = coll131.reverse();
             function processOne113() {
               var result;
               result = coll131.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll131.length > 0) processOne113(); else rest113();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll131.length > 0) processOne113(); else rest113();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll131.length > 0) processOne113(); else rest113();
                     
                   }
                 }
               }
             }
             function rest113() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll131.length > 0) processOne113(); else rest113();
           });
           
         });
       }
};

controls.meditate.Episode = {
  title: null,
  downloadUrl: null
};
controls.meditate.podcasts = mobl.ref(new persistence.LocalQueryCollection([]));
controls.meditate.fetch = function(query, callback) {
  var __this = this;
  mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + query + "'", function(result__) {
    var tmp4523 = result__;
    var result__ = tmp4523;
    var resource = result__;
    var result__ = new persistence.LocalQueryCollection([]);
    var podcasts = result__;
    var result__ = resource;
    if(result__) {
      var result__ = resource.json.json;
      resource.json.json.list(function(coll132) {
        coll132 = coll132.reverse();
        function processOne114() {
          var podcast;
          podcast = coll132.pop();
          var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
          
          if(coll132.length > 0) processOne114(); else rest114();
          
        }
        function rest114() {
          var result__ = podcasts;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
        if(coll132.length > 0) processOne114(); else rest114();
      });
      
    } else {
      {
        var result__ = podcasts;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
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
  var root1678 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp4451 = mobl.ref(null);
  
  var nodes1444 = $("<span>");
  root1678.append(nodes1444);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp4451, function(_, callback) {
    var root1679 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4449 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp4450 = mobl.ref(mobl._("Back", []));
    
    var nodes1445 = $("<span>");
    root1679.append(nodes1445);
    subs__.addSub((ui.backButton)(tmp4450, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4449, function(_, callback) {
      var root1680 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1680); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1445;
      nodes1445 = node.contents();
      oldNodes.replaceWith(nodes1445);
    }));
    callback(root1679); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1444;
    nodes1444 = node.contents();
    oldNodes.replaceWith(nodes1444);
  }));
  
  var tmp4473 = mobl.ref(null);
  
  
  var tmp4472 = mobl.ref(null);
  
  
  var tmp4471 = mobl.ref(null);
  
  
  var tmp4470 = mobl.ref(null);
  
  var nodes1446 = $("<span>");
  root1678.append(nodes1446);
  subs__.addSub((mobl.block)(tmp4470, tmp4471, tmp4472, tmp4473, function(_, callback) {
    var root1681 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4455 = mobl.ref(false);
    
    
    var tmp4454 = mobl.ref(null);
    
    
    var tmp4453 = mobl.ref(null);
    
    var nodes1447 = $("<span>");
    root1681.append(nodes1447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4453, tmp4454, tmp4455, function(_, callback) {
      var root1682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4452 = mobl.ref("_blank");
      
      var nodes1448 = $("<span>");
      root1682.append(nodes1448);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp4452, function(_, callback) {
        var root1683 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1683); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1448;
        nodes1448 = node.contents();
        oldNodes.replaceWith(nodes1448);
      }));
      callback(root1682); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1447;
      nodes1447 = node.contents();
      oldNodes.replaceWith(nodes1447);
    }));
    
    var tmp4469 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp4469.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node165 = $("<span>");
    root1681.append(node165);
    var condSubs63 = new mobl.CompSubscription();
    subs__.addSub(condSubs63);
    var oldValue63;
    var renderCond63 = function() {
      var value74 = tmp4469.get();
      if(oldValue63 === value74) return;
      oldValue63 = value74;
      var subs__ = condSubs63;
      subs__.unsubscribe();
      node165.empty();
      if(value74) {
        
        var tmp4461 = mobl.ref(false);
        
        
        var tmp4460 = mobl.ref(null);
        
        
        var tmp4459 = mobl.ref(null);
        
        var nodes1449 = $("<span>");
        node165.append(nodes1449);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4459, tmp4460, tmp4461, function(_, callback) {
          var root1684 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp4456 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp4456.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp4456.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp4458 = mobl.ref(null);
          
          
          var tmp4457 = mobl.ref(null);
          
          var nodes1450 = $("<span>");
          root1684.append(nodes1450);
          subs__.addSub((mobl.label)(tmp4456, tmp4457, tmp4458, function(_, callback) {
            var root1685 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1685); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1450;
            nodes1450 = node.contents();
            oldNodes.replaceWith(nodes1450);
          }));
          callback(root1684); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1449;
          nodes1449 = node.contents();
          oldNodes.replaceWith(nodes1449);
        }));
        
        var tmp4468 = mobl.ref(false);
        
        
        var tmp4467 = mobl.ref(null);
        
        
        var tmp4466 = mobl.ref(null);
        
        var nodes1451 = $("<span>");
        node165.append(nodes1451);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4466, tmp4467, tmp4468, function(_, callback) {
          var root1686 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp4463 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp4462 = mobl.ref("Play");
          
          var nodes1452 = $("<span>");
          root1686.append(nodes1452);
          subs__.addSub((ui.button)(tmp4462, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4463, function(_, callback) {
            var root1687 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1687); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1452;
            nodes1452 = node.contents();
            oldNodes.replaceWith(nodes1452);
          }));
          
          var tmp4465 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp4464 = mobl.ref("Pause");
          
          var nodes1453 = $("<span>");
          root1686.append(nodes1453);
          subs__.addSub((ui.button)(tmp4464, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4465, function(_, callback) {
            var root1688 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1688); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1453;
            nodes1453 = node.contents();
            oldNodes.replaceWith(nodes1453);
          }));
          callback(root1686); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1451;
          nodes1451 = node.contents();
          oldNodes.replaceWith(nodes1451);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond63();
    subs__.addSub(tmp4469.addEventListener('change', function() {
      renderCond63();
    }));
    
    callback(root1681); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1446;
    nodes1446 = node.contents();
    oldNodes.replaceWith(nodes1446);
  }));
  callback(root1678); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root1689 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4503 = mobl.ref(null);
  
  
  var tmp4502 = mobl.ref(null);
  
  
  var tmp4501 = mobl.ref(null);
  
  
  var tmp4500 = mobl.ref(null);
  
  var nodes1454 = $("<span>");
  root1689.append(nodes1454);
  subs__.addSub((mobl.block)(tmp4500, tmp4501, tmp4502, tmp4503, function(_, callback) {
    var root1690 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4482 = mobl.ref(false);
    
    
    var tmp4481 = mobl.ref(null);
    
    
    var tmp4480 = mobl.ref(null);
    
    var nodes1455 = $("<span>");
    root1690.append(nodes1455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4480, tmp4481, tmp4482, function(_, callback) {
      var root1691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4474 = mobl.ref(120);
      
      
      var tmp4479 = mobl.ref(null);
      
      
      var tmp4478 = mobl.ref(null);
      
      
      var tmp4477 = mobl.ref(null);
      
      
      var tmp4476 = mobl.ref(null);
      
      
      var tmp4475 = mobl.ref(null);
      
      var nodes1456 = $("<span>");
      root1691.append(nodes1456);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp4474, tmp4475, tmp4476, tmp4477, tmp4478, tmp4479, function(_, callback) {
        var root1692 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1692); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1456;
        nodes1456 = node.contents();
        oldNodes.replaceWith(nodes1456);
      }));
      callback(root1691); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1455;
      nodes1455 = node.contents();
      oldNodes.replaceWith(nodes1455);
    }));
    
    var tmp4488 = mobl.ref(false);
    
    
    var tmp4487 = mobl.ref(null);
    
    
    var tmp4486 = mobl.ref(null);
    
    var nodes1457 = $("<span>");
    root1690.append(nodes1457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4486, tmp4487, tmp4488, function(_, callback) {
      var root1693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4483 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp4483.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp4485 = mobl.ref(null);
      
      
      var tmp4484 = mobl.ref(null);
      
      var nodes1458 = $("<span>");
      root1693.append(nodes1458);
      subs__.addSub((mobl.label)(tmp4483, tmp4484, tmp4485, function(_, callback) {
        var root1694 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1694); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1458;
        nodes1458 = node.contents();
        oldNodes.replaceWith(nodes1458);
      }));
      callback(root1693); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1457;
      nodes1457 = node.contents();
      oldNodes.replaceWith(nodes1457);
    }));
    
    var tmp4494 = mobl.ref(false);
    
    
    var tmp4493 = mobl.ref(null);
    
    
    var tmp4492 = mobl.ref(null);
    
    var nodes1459 = $("<span>");
    root1690.append(nodes1459);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4492, tmp4493, tmp4494, function(_, callback) {
      var root1695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4489 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp4489.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp4491 = mobl.ref(null);
      
      
      var tmp4490 = mobl.ref(null);
      
      var nodes1460 = $("<span>");
      root1695.append(nodes1460);
      subs__.addSub((mobl.label)(tmp4489, tmp4490, tmp4491, function(_, callback) {
        var root1696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1696); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1460;
        nodes1460 = node.contents();
        oldNodes.replaceWith(nodes1460);
      }));
      callback(root1695); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1459;
      nodes1459 = node.contents();
      oldNodes.replaceWith(nodes1459);
    }));
    
    var tmp4499 = mobl.ref(false);
    
    
    var tmp4498 = mobl.ref(null);
    
    
    var tmp4497 = mobl.ref(null);
    
    var nodes1461 = $("<span>");
    root1690.append(nodes1461);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4497, tmp4498, tmp4499, function(_, callback) {
      var root1697 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4495 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp4495.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp4496 = mobl.ref("_blank");
      
      var nodes1462 = $("<span>");
      root1697.append(nodes1462);
      subs__.addSub((mobl.link)(tmp4495, tmp4496, function(_, callback) {
        var root1698 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1698); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1462;
        nodes1462 = node.contents();
        oldNodes.replaceWith(nodes1462);
      }));
      callback(root1697); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1461;
      nodes1461 = node.contents();
      oldNodes.replaceWith(nodes1461);
    }));
    callback(root1690); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1454;
    nodes1454 = node.contents();
    oldNodes.replaceWith(nodes1454);
  }));
  
  var tmp4515 = mobl.ref(null);
  
  
  var tmp4514 = mobl.ref(null);
  
  
  var tmp4513 = mobl.ref(null);
  
  
  var tmp4512 = mobl.ref(null);
  
  var nodes1463 = $("<span>");
  root1689.append(nodes1463);
  subs__.addSub((mobl.block)(tmp4512, tmp4513, tmp4514, tmp4515, function(_, callback) {
    var root1699 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4504 = mobl.ref("Episodes");
    
    
    var tmp4505 = mobl.ref(null);
    
    var nodes1464 = $("<span>");
    root1699.append(nodes1464);
    subs__.addSub((ui.header)(tmp4504, tmp4505, function(_, callback) {
      var root1700 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1700); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1464;
      nodes1464 = node.contents();
      oldNodes.replaceWith(nodes1464);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp4511 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp4524 = result__;
          var result__ = tmp4524;
          tmp4511.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp4525 = result__;
          var result__ = tmp4525;
          tmp4511.set(result__);
          
        });
      }));
      
      
      var node166 = mobl.loadingSpan();
      root1699.append(node166);
      var list65;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList65 = function() {
        var subs__ = listSubs__;
        list65 = tmp4511.get();
        list65.list(function(results1112) {
          node166.empty();
          for(var i65 = 0; i65 < results1112.length; i65++) {
            (function() {
              var iternode65 = $("<span>");
              node166.append(iternode65);
              var episode;
              episode = mobl.ref(mobl.ref(results1112), i65);
              
              var tmp4508 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp4526 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp4510 = mobl.ref(false);
              
              
              var tmp4509 = mobl.ref(null);
              
              var nodes1465 = $("<span>");
              iternode65.append(nodes1465);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4508, tmp4509, tmp4510, function(_, callback) {
                var root1701 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp4507 = mobl.ref(null);
                
                
                var tmp4506 = mobl.ref(null);
                
                var nodes1466 = $("<span>");
                root1701.append(nodes1466);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp4506, tmp4507, function(_, callback) {
                  var root1702 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1702); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1466;
                  nodes1466 = node.contents();
                  oldNodes.replaceWith(nodes1466);
                }));
                callback(root1701); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1465;
                nodes1465 = node.contents();
                oldNodes.replaceWith(nodes1465);
              }));
              
              var oldNodes = iternode65;
              iternode65 = iternode65.contents();
              oldNodes.replaceWith(iternode65);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list65.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
          subs__.addSub(tmp4511.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
        });
      };
      renderList65();
      
      callback(root1699); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1463;
    nodes1463 = node.contents();
    oldNodes.replaceWith(nodes1463);
  }));
  callback(root1689); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root1703 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4516 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp4516.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp4516.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp4518 = mobl.ref(null);
  
  
  var tmp4517 = mobl.ref(null);
  
  var nodes1467 = $("<span>");
  root1703.append(nodes1467);
  subs__.addSub((mobl.label)(tmp4516, tmp4517, tmp4518, function(_, callback) {
    var root1704 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1704); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1467;
    nodes1467 = node.contents();
    oldNodes.replaceWith(nodes1467);
  }));
  callback(root1703); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function() {
   var __this = this;
  var event = "jazz";
  
  return event;
};


controls.meditate.meditate = function(elements, callback) {
  var root1705 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref(controls.meditate.selectLifeEvent());
  
  var podcasts = mobl.ref(null);
  controls.meditate.fetch(query.get(), function(result__) {
    var tmp4527 = result__;
    var result__ = tmp4527;
    podcasts.set(result__);
    
  });
  
  var tmp4519 = mobl.ref("Loading...");
  
  var nodes1468 = $("<span>");
  root1705.append(nodes1468);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp4519, function(_, callback) {
    var root1706 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1469 = $("<span>");
    root1706.append(nodes1469);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
      var root1707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1707); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1469;
      nodes1469 = node.contents();
      oldNodes.replaceWith(nodes1469);
    }));
    callback(root1706); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1468;
    nodes1468 = node.contents();
    oldNodes.replaceWith(nodes1468);
  }));
  callback(root1705); return subs__;
  
  
  return subs__;
};
