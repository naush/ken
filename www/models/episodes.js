mobl.provides('models.episodes');
mobl.provides('models.episodes');
mobl.provides('mobl');

models.episodes.Episode = persistence.define('models__episodes__Episode', {
  'title': 'VARCHAR(255)',
  'downloadUrl': 'VARCHAR(255)'
});


