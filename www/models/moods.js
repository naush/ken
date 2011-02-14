mobl.provides('models.moods');

models.moods.Mood = persistence.define('models__moods__Mood', {
  'happy': 'VARCHAR(255)',
  'relaxed': 'VARCHAR(255)',
  'awake': 'VARCHAR(255)',
  'date': 'DATE'
});


