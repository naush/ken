mobl.provides('models.podcasts');
mobl.provides('models');
mobl.provides('mobl');

models.podcasts.Podcast = {
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
           var tmp3585 = result__;
           var result__ = tmp3585.feed;
           var tmp3584 = result__;
           var result__ = tmp3584.entry;
           var tmp3583 = result__;
           var result__ = tmp3583;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll255) {
             coll255 = coll255.reverse();
             function processOne138() {
               var result;
               result = coll255.pop();
               var result__ = mobl.instantiate(models.episodes.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll255.length > 0) processOne138(); else rest138();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll255.length > 0) processOne138(); else rest138();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll255.length > 0) processOne138(); else rest138();
                     
                   }
                 }
               }
             }
             function rest138() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll255.length > 0) processOne138(); else rest138();
           });
           
         });
       }
};
