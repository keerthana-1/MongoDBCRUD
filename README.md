# Perfoeming CRUD operations in MongoDB

- This Node.js application interacts with a MongoDB database to manage student details. 
- It allows the creation, retrieval, updating, and deletion of student records through a set of RESTful API endpoints.

## Tech Stack:
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose (ODM for MongoDB)

## Implementation:

### Dependencies and Setup:

mongoose: For interacting with MongoDB.
express: For setting up the web server and routing.
router: For defining the route handlers.

### Student Model:

A Mongoose schema and model (studentSchema) are defined in a separate file (../Models/Student), representing the student documents in the MongoDB collection.

### Route Handlers:

1. Create Student:

- Endpoint: POST /create-student
- Functionality: Creates a new student document in the MongoDB database with the data received in the request body (req.body).

2. Read Students:

- Endpoint: GET /
- Functionality: Retrieves all student documents from the database.

3. Get Single Student:

- Endpoint: GET /edit-student/:id
- Functionality: Retrieves a single student document by its ID from the database.

4. Update Student:

- Endpoint: PUT /update-student/:id
- Functionality: Updates an existing student document in the database identified by its ID with the new data received in the request body (req.body).

5. Delete Student:

- Endpoint: DELETE /delete-student/:id
- Functionality: Deletes a student document from the database identified by its ID.
