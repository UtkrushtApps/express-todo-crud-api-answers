const express = require('express');
const tasksRouter = require('./routes/tasks');
const loggerMiddleware = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// Use JSON parser
app.use(express.json());
// Custom logger
app.use(loggerMiddleware);

// Routes
app.use('/tasks', tasksRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
