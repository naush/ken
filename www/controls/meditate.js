mobl.provides('controls.meditate');
mobl.provides('models');
mobl.provides('models.episodes');
mobl.provides('mobl.media');
mobl.provides('models.lifeevents');
mobl.provides('ui');
mobl.provides('controls.meditate');
mobl.provides('mobl');
mobl.provides('models.podcasts');
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
  var root483 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  var result__ = mobl.media.Audio.canPlayMp3();
  var tmp1562 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp1562.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node240 = $("<span>");
  root483.append(node240);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value21 = tmp1562.get();
    if(oldValue9 === value21) return;
    oldValue9 = value21;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node240.empty();
    if(value21) {
      var result__ = false;
      var tmp1544 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1543 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1542 = mobl.ref(result__);
      
      var nodes419 = $("<span>");
      node240.append(nodes419);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1542, tmp1543, tmp1544, function(_, callback) {
        var root484 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1540 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1541 = mobl.ref(result__);
        
        var nodes420 = $("<span>");
        root484.append(nodes420);
        subs__.addSub((ui.backButton)(tmp1541, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1540, function(_, callback) {
          var root485 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root485); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes420;
          nodes420 = node.contents();
          oldNodes.replaceWith(nodes420);
        }));
        callback(root484); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes419;
        nodes419 = node.contents();
        oldNodes.replaceWith(nodes419);
      }));
      var result__ = false;
      var tmp1550 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1549 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1548 = mobl.ref(result__);
      
      var nodes421 = $("<span>");
      node240.append(nodes421);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1548, tmp1549, tmp1550, function(_, callback) {
        var root486 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration());
        var tmp1545 = mobl.ref(result__);
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp1545.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp1545.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        var result__ = null;
        var tmp1547 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1546 = mobl.ref(result__);
        
        var nodes422 = $("<span>");
        root486.append(nodes422);
        subs__.addSub((mobl.label)(tmp1545, tmp1546, tmp1547, function(_, callback) {
          var root487 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root487); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes422;
          nodes422 = node.contents();
          oldNodes.replaceWith(nodes422);
        }));
        callback(root486); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes421;
        nodes421 = node.contents();
        oldNodes.replaceWith(nodes421);
      }));
      var result__ = false;
      var tmp1557 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1556 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1555 = mobl.ref(result__);
      
      var nodes423 = $("<span>");
      node240.append(nodes423);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1555, tmp1556, tmp1557, function(_, callback) {
        var root488 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().play();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1552 = mobl.ref(result__);
        
        var result__ = "Play";
        var tmp1551 = mobl.ref(result__);
        
        var nodes424 = $("<span>");
        root488.append(nodes424);
        subs__.addSub((ui.button)(tmp1551, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1552, function(_, callback) {
          var root489 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root489); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes424;
          nodes424 = node.contents();
          oldNodes.replaceWith(nodes424);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1554 = mobl.ref(result__);
        
        var result__ = "Pause";
        var tmp1553 = mobl.ref(result__);
        
        var nodes425 = $("<span>");
        root488.append(nodes425);
        subs__.addSub((ui.button)(tmp1553, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1554, function(_, callback) {
          var root490 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root490); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes425;
          nodes425 = node.contents();
          oldNodes.replaceWith(nodes425);
        }));
        callback(root488); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes423;
        nodes423 = node.contents();
        oldNodes.replaceWith(nodes423);
      }));
      var result__ = false;
      var tmp1561 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1560 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1559 = mobl.ref(result__);
      
      var nodes426 = $("<span>");
      node240.append(nodes426);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1559, tmp1560, tmp1561, function(_, callback) {
        var root491 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "_blank";
        var tmp1558 = mobl.ref(result__);
        
        var nodes427 = $("<span>");
        root491.append(nodes427);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp1558, function(_, callback) {
          var root492 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root492.append("Download MP3");
          callback(root492); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes427;
          nodes427 = node.contents();
          oldNodes.replaceWith(nodes427);
        }));
        callback(root491); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes426;
        nodes426 = node.contents();
        oldNodes.replaceWith(nodes426);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond9();
  subs__.addSub(tmp1562.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root483); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root493 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp1577 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1576 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1575 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1574 = mobl.ref(result__);
  
  var nodes428 = $("<span>");
  root493.append(nodes428);
  subs__.addSub((mobl.block)(tmp1574, tmp1575, tmp1576, tmp1577, function(_, callback) {
    var root494 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = false;
    var tmp1568 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1567 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1566 = mobl.ref(result__);
    
    var nodes429 = $("<span>");
    root494.append(nodes429);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1566, tmp1567, tmp1568, function(_, callback) {
      var root495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title;
      var tmp1563 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp1563.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      var result__ = null;
      var tmp1565 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1564 = mobl.ref(result__);
      
      var nodes430 = $("<span>");
      root495.append(nodes430);
      subs__.addSub((mobl.label)(tmp1563, tmp1564, tmp1565, function(_, callback) {
        var root496 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root496); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes430;
        nodes430 = node.contents();
        oldNodes.replaceWith(nodes430);
      }));
      callback(root495); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes429;
      nodes429 = node.contents();
      oldNodes.replaceWith(nodes429);
    }));
    var result__ = false;
    var tmp1573 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1572 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1571 = mobl.ref(result__);
    
    var nodes431 = $("<span>");
    root494.append(nodes431);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1571, tmp1572, tmp1573, function(_, callback) {
      var root497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website;
      var tmp1569 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp1569.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      var result__ = "_blank";
      var tmp1570 = mobl.ref(result__);
      
      var nodes432 = $("<span>");
      root497.append(nodes432);
      subs__.addSub((mobl.link)(tmp1569, tmp1570, function(_, callback) {
        var root498 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root498.append("Podcast Website");
        callback(root498); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes432;
        nodes432 = node.contents();
        oldNodes.replaceWith(nodes432);
      }));
      callback(root497); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes431;
      nodes431 = node.contents();
      oldNodes.replaceWith(nodes431);
    }));
    callback(root494); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes428;
    nodes428 = node.contents();
    oldNodes.replaceWith(nodes428);
  }));
  
  var node241 = $("<div>");
  node241.attr('style', "height: 200px; overflow-y: auto; width: 270px;");
  
  var result__ = null;
  var tmp1587 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1586 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1585 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1584 = mobl.ref(result__);
  
  var nodes433 = $("<span>");
  node241.append(nodes433);
  subs__.addSub((mobl.block)(tmp1584, tmp1585, tmp1586, tmp1587, function(_, callback) {
    var root499 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp1605 = result__;
      var tmp1583 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp1603 = result__;
          var result__ = tmp1603;
          tmp1583.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp1604 = result__;
          var result__ = tmp1604;
          tmp1583.set(result__);
          
        });
      }));
      
      
      var node242 = mobl.loadingSpan();
      root499.append(node242);
      var list14;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList14 = function() {
        var subs__ = listSubs__;
        list14 = tmp1583.get();
        list14.list(function(results17) {
          node242.empty();
          for(var i22 = 0; i22 < results17.length; i22++) {
            (function() {
              var iternode14 = $("<span>");
              node242.append(iternode14);
              var episode;
              episode = mobl.ref(mobl.ref(results17), i22);
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                               var tmp1606 = result__;
                               if(callback && callback.apply) callback(); return;
                               });
                             };
              var tmp1580 = mobl.ref(result__);
              
              var result__ = false;
              var tmp1582 = mobl.ref(result__);
              
              var result__ = null;
              var tmp1581 = mobl.ref(result__);
              
              var nodes434 = $("<span>");
              iternode14.append(nodes434);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1580, tmp1581, tmp1582, function(_, callback) {
                var root500 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var result__ = null;
                var tmp1579 = mobl.ref(result__);
                
                var result__ = null;
                var tmp1578 = mobl.ref(result__);
                
                var nodes435 = $("<span>");
                root500.append(nodes435);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp1578, tmp1579, function(_, callback) {
                  var root501 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root501); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes435;
                  nodes435 = node.contents();
                  oldNodes.replaceWith(nodes435);
                }));
                callback(root500); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes434;
                nodes434 = node.contents();
                oldNodes.replaceWith(nodes434);
              }));
              
              var oldNodes = iternode14;
              iternode14 = iternode14.contents();
              oldNodes.replaceWith(iternode14);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
          subs__.addSub(tmp1583.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
        });
      };
      renderList14();
      
      callback(root499); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes433;
    nodes433 = node.contents();
    oldNodes.replaceWith(nodes433);
  }));
  root493.append(node241);
  callback(root493); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root502 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp1589 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1588 = mobl.ref(result__);
  
  var nodes436 = $("<span>");
  root502.append(nodes436);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp1588, tmp1589, function(_, callback) {
    var root503 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root503); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes436;
    nodes436 = node.contents();
    oldNodes.replaceWith(nodes436);
  }));
  callback(root502); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp1607 = result__;
    var result__ = tmp1607;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root504 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var tmp1608 = result__;
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp1609 = result__;
      var result__ = tmp1609;
      podcasts.set(result__);
      
    });
    var result__ = null;
    var tmp1593 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1592 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1591 = mobl.ref(result__);
    
    var nodes437 = $("<span>");
    root504.append(nodes437);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp1591, tmp1592, tmp1593, function(_, callback) {
      var root505 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Loading...";
      var tmp1590 = mobl.ref(result__);
      
      var nodes438 = $("<span>");
      root505.append(nodes438);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp1590, function(_, callback) {
        var root506 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes439 = $("<span>");
        root506.append(nodes439);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root507 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root507); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes439;
          nodes439 = node.contents();
          oldNodes.replaceWith(nodes439);
        }));
        callback(root506); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes438;
        nodes438 = node.contents();
        oldNodes.replaceWith(nodes438);
      }));
      callback(root505); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes437;
      nodes437 = node.contents();
      oldNodes.replaceWith(nodes437);
    }));
    
    var updateButtonImage = mobl.ref("resources/images/update_on.png");
    var result__ = null;
    var tmp1602 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1601 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1600 = mobl.ref(result__);
    
    var nodes440 = $("<span>");
    root504.append(nodes440);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp1600, tmp1601, tmp1602, function(_, callback) {
      var root508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node243 = $("<span>");
      
      var val181 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_pressed.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val181 !== null) {
        subs__.addSub(mobl.domBind(node243, 'mousedown', val181));
      }
      
      var val182 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_on.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val182 !== null) {
        subs__.addSub(mobl.domBind(node243, 'mouseup', val182));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       controls.meditate.selectLifeEvent(function(result__) {
                         var tmp1610 = result__;
                         var result__ = tmp1610;
                         lifeEvent.set(result__);
                         var result__ = event;
                         if(result__) {
                           var result__ = ui.startLoading("Loading...", ui.progressStyle);
                           models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                             var tmp1611 = result__;
                             var result__ = tmp1611;
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
                     };
      var tmp1594 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1599 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1598 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1597 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1596 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1595 = mobl.ref(result__);
      
      var nodes441 = $("<span>");
      node243.append(nodes441);
      subs__.addSub((ui.image)(updateButtonImage, tmp1595, tmp1596, tmp1594, tmp1597, tmp1598, tmp1599, function(_, callback) {
        var root509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes441;
        nodes441 = node.contents();
        oldNodes.replaceWith(nodes441);
      }));
      root508.append(node243);
      callback(root508); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes440;
      nodes440 = node.contents();
      oldNodes.replaceWith(nodes440);
    }));
    callback(root504); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll43) {
    coll43 = coll43.reverse();
    function processOne17() {
      var podcast;
      podcast = coll43.pop();
      var result__ = front.add(podcast);
      
      if(coll43.length > 0) processOne17(); else rest17();
      
    }
    function rest17() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll43.length > 0) processOne17(); else rest17();
  });
  
};

