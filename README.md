# Students-Project
A fully functioning CRUD application with PostgreSQL, Node.js and Express.js.

## Installation
1. Clone the repo 
   ```
    git clone https://github.com/akglbahadr/students-project.git
   ```
2. Install NPM packages
   ```
    npm install
   ```
## Usage
Run the command to start the app with nodemon
   ```
   npm run start-dev
   ```

## Endpoints
`GET /api/students`

Request Payload
```
Sample request: 
{
        "name": "Bahadir Furkan Akgul",
        "email": "akgl.bahadr@gmail.com",
        "age": 26,
        "dob": "1995-08-24T21:00:00.000Z"
        }
``` 
`GET /api/students/id`
`POST /api/students`
`PUT /api/students/id` //Only allows to update the name.
`DELETE /api/students/id`
