let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let studentSchema = require('../Models/Student');
// CREATE Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body)
});

// READ Students
router.route('/').get((req, res) => {
    studentSchema.find().then((err, result) => {
      console.log("result")
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  });

  // Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  studentSchema.findById(req.params.id).then((error, data) => {
    if (error) {
      res.send(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }).then( (error, data) => {
    if (error) {
      res.send(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id).then( (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

  module.exports = router ;