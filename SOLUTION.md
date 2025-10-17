# Solution Steps

1. 1. Initialize an Express.js project and install required dependencies (express).

2. 2. Create 'app.js' as the main entrypoint. Set up express.json() middleware and a custom logger, and compose in routing and error/404 handlers. Have the server listen on port 3000 and log server start.

3. 3. Under 'routes/', create 'tasks.js' which declares the /tasks routes for GET, POST, PUT, DELETE, delegating implementations to the controller module.

4. 4. Under 'controllers/', create 'tasksController.js' which manages in-memory storage for tasks with a simple incrementing ID. Implement async (async/await) handlers for all CRUD operations, including validation for 'description' in POST and PUT. Return suitable status codes and error messages on validation or missing-not-found errors.

5. 5. Under 'middleware/', create 'logger.js' for logging HTTP method and URL on each request, and 'errorHandler.js' for structured 500 Internal Server Error responses (including logging the error).

6. 6. In the 404 catch-all in 'app.js', respond with JSON { error: 'Not Found' } and status 404.

7. 7. Ensure all modules are properly exported and imported in the right places.

8. 8. Test the API using a tool like Postman or curl to verify all CRUD operations, error handling, and logging work as expected.

