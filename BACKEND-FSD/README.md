# Experiment 7: Create a Database and Collection in MongoDB

## Aim
To create a database named `studentDB` and a collection named `students` using MongoDB.

## Software Required
- MongoDB Compass
- MongoDB Server

## Procedure

1. Open MongoDB Compass.
2. Connect to the local MongoDB server.
3. Create a database named `studentDB`.
4. Create a collection named `students`.
5. Insert student details into the collection.
6. Verify the inserted document.

## MongoDB Commands

```javascript
use studentDB

db.createCollection("students")

db.students.insertOne({
    rollNo: 101,
    name: "Rudra Pratap Singh",
    course: "B.Tech",
    branch: "Computer Science",
    year: 2,
    college: "ABES Engineering College"
})

show dbs

show collections

db.students.find()
```

## Output

Database: `studentDB`

Collection: `students`

Student record inserted successfully.

## Result

Successfully created the `studentDB` database and `students` collection in MongoDB and inserted a student record.