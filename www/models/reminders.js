mobl.provides('models.reminders');
mobl.provides('models.reminders');
mobl.provides('mobl');

models.reminders.Reminder = persistence.define('models__reminders__Reminder', {
  'name': 'VARCHAR(255)',
  'stress': 'INT',
  'date': 'DATE'
});


