mobl.provides('models.lifeevents');

models.lifeevents.LifeEvent = persistence.define('models__lifeevents__LifeEvent', {
  'name': 'VARCHAR(255)',
  'stress': 'INT',
  'date': 'DATE',
  'keywords': 'VARCHAR(255)'
});


