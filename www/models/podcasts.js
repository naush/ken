mobl.provides('models.podcasts');
mobl.provides('models');
mobl.provides('mobl');
models.podcasts.fetchPodcasts = function(keywords, callback) {
  var __this = this;
  var result__ = "";
  var query = result__;
  var result__ = new persistence.LocalQueryCollection([]);
  var podcasts = result__;
  var result__ = keywords.split(",", 1000);
  keywords.split(",", 1000).list(function(coll6636) {
    coll6636 = coll6636.reverse();
    function processOne960() {
      var keyword;
      keyword = coll6636.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp46635 = result__;
        var result__ = tmp46635;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll6637) {
            coll6637 = coll6637.reverse();
            function processOne961() {
              var podcast;
              podcast = coll6637.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(new models.podcasts.Podcast({'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll6637.length > 0) processOne961(); else rest961();
                
              } else {
                {
                  
                  if(coll6637.length > 0) processOne961(); else rest961();
                  
                }
              }
            }
            function rest961() {
              
              if(coll6636.length > 0) processOne960(); else rest960();
              
            }
            if(coll6637.length > 0) processOne961(); else rest961();
          });
          
        } else {
          {
            
            if(coll6636.length > 0) processOne960(); else rest960();
            
          }
        }
      });
    }
    function rest960() {
      podcasts.count(function(result__) {
        var tmp46637 = result__;
        var result__ = tmp46637 == 0;
        var tmp46636 = result__;
        var result__ = tmp46636;
        if(result__) {
          {
            var result__ = podcasts.add(new models.podcasts.Podcast({'website': "http://www.anxietyslayer.com", 'mygpo_link': "", 'description': "Tips and tools to help you conquer stress and anxiety. Featuring relaxation, meditation and breathing techniques to help you relax and feel calm.", 'subs': "", 'title': "Anxiety Slayer", 'url': "http://anxietyslayer.podbean.com/feed/", 'subscribers_last_week': "", 'logo_url': "http://anxietyslayer.podbean.com/mf/web/i67iwi/slayer-podcast-url.jpg"}));
            var result__ = podcasts.add(new models.podcasts.Podcast({'website': "http://www.chakra-balance.com", 'mygpo_link': "", 'description': "http://www.chakra-balance.com presents a complete chakra meditation. A mix of sound frequencies and relaxing music, all 7 chakras are healed & balanced. You will feel totally energized! There are 29 FREE mp3 audios available from this site.", 'subs': "", 'title': "Chakra Meditation", 'url': "http://chakra-balance.com/podcast/feed.xml", 'subscribers_last_week': "", 'logo_url': "http://chakra-balance.com/podcast/images/itunes_image.jpg"}));
            var result__ = podcasts.add(new models.podcasts.Podcast({'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "The first guided meditation in a series of regular podcasts by Stin. Daily use will invite stillness, joy and abundance to your life. Stressed? Wanting more? Put on your headphones.", 'subs': "", 'title': "Meditation Station", 'url': "http://fitmindbody.audioblog.com/rss/creation_station.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1004_1303192999.jpg"}));
            var result__ = podcasts.add(new models.podcasts.Podcast({'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "These guided affirmations will help the law of attraction work for you and help you think in a way that will bring you what you WANT, not what you fear! The most listened to affirmation MP3 from mythoughtcoach.com will be posted every month, along with other great stuff.", 'subs': "", 'title': "My Thought Coach", 'url': "http://fitmindbody.hipcast.com/rss/mythoughtcoach.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1008_1303192751.jpg"}));
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
    if(coll6636.length > 0) processOne960(); else rest960();
  });
  
};


models.podcasts.Podcast = persistence.define('models__podcasts__Podcast', {
  'website': 'VARCHAR(255)',
  'mygpo_link': 'VARCHAR(255)',
  'description': 'VARCHAR(255)',
  'subs': 'VARCHAR(255)',
  'title': 'VARCHAR(255)',
  'url': 'VARCHAR(255)',
  'subscribers_last_week': 'VARCHAR(255)',
  'logo_url': 'VARCHAR(255)'
});

models.podcasts.Podcast.prototype.fetchEpisodes = function(callback) {
                                    var __this = this;
                                    mobl.yql.YQL.query("select * from feednormalizer where url='" + __this.url + "' and output='atom_1.0'", function(result__) {
                                      var tmp46640 = result__;
                                      var result__ = tmp46640.feed;
                                      var tmp46639 = result__;
                                      var result__ = tmp46639.entry;
                                      var tmp46638 = result__;
                                      var result__ = tmp46638;
                                      var results = result__;
                                      var result__ = new persistence.LocalQueryCollection([]);
                                      var episodes = result__;
                                      var result__ = results;
                                      results.list(function(coll6638) {
                                        coll6638 = coll6638.reverse();
                                        function processOne962() {
                                          var result;
                                          result = coll6638.pop();
                                          var result__ = new models.episodes.Episode({'title': result.title});
                                          var episode = result__;
                                          var result__ = result.link.href;
                                          if(result__) {
                                            var result__ = result.link.href;
                                            episode.downloadUrl = result__;
                                            var result__ = episodes.add(episode);
                                            
                                            if(coll6638.length > 0) processOne962(); else rest962();
                                            
                                          } else {
                                            var result__ = result.link.length;
                                            if(result__) {
                                              var result__ = result.link.get(result.link.length - 1).href;
                                              episode.downloadUrl = result__;
                                              var result__ = episodes.add(episode);
                                              
                                              if(coll6638.length > 0) processOne962(); else rest962();
                                              
                                            } else {
                                              {
                                                var result__ = episodes.add(episode);
                                                
                                                if(coll6638.length > 0) processOne962(); else rest962();
                                                
                                              }
                                            }
                                          }
                                        }
                                        function rest962() {
                                          var result__ = episodes.limit(10);
                                          if(callback && callback.apply) callback(result__);
                                          return;
                                          if(callback && callback.apply) callback(); return;
                                        }
                                        if(coll6638.length > 0) processOne962(); else rest962();
                                      });
                                      
                                    });
                                  };
