const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/tasksController');

const router = express.Router();

// GET /tasks
router.get('/', getAllTasks);

// GET /tasks/:id
router.get('/:id', getTaskById);

// POST /tasks
router.post('/', createTask);

// PUT /tasks/:id
router.put('/:id', updateTask);

// DELETE /tasks/:id
router.delete('/:id', deleteTask);

module.exports = router;
