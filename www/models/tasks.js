mobl.provides('models.tasks');

models.tasks.Task = persistence.define('models__tasks__Task', {
  'name': 'VARCHAR(255)',
  'description': 'VARCHAR(255)',
  'done': 'BOOL',
  'date': 'DATE'
});


models.tasks.Task.textIndex('description');
models.tasks.Task.textIndex('name');
