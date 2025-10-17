let tasks = [];
let nextId = 1;

// Async wrappers for demo
exports.getAllTasks = async (req, res, next) => {
  try {
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (typeof description !== 'string' || description.trim() === '') {
      return res.status(400).json({ error: 'Description is required and must be a non-empty string' });
    }
    const task = { id: nextId++, description: description.trim() };
    tasks.push(task);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { description } = req.body;
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    if (typeof description !== 'string' || description.trim() === '') {
      return res.status(400).json({ error: 'Description is required and must be a non-empty string' });
    }
    tasks[index].description = description.trim();
    res.json(tasks[index]);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const deleted = tasks.splice(index, 1)[0];
    res.json(deleted);
  } catch (err) {
    next(err);
  }
};
