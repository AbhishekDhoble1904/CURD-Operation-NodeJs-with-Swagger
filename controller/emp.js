const Emp = require('../models/emp')
const mongoose = require('mongoose')

//CREATE
function create(req, res, next) {
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile
  })
  emp.save().then((data) => {
    res.send(data)
  })
}

//VIEW
function view(req, res, next) {
  Emp.find({}).then((data) => {
    res.send(data)
  })
}

//UPDATE
function update(req, res, next) {
  Emp.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
    if (err) {
      return res.status(500).send({ error: "Problem with Updating the   Employee recored " })
    };
    res.send({ success: "Updation successfull" });
  })
}

//REMOVE
function remove(req, res, next) {
  Emp.findByIdAndDelete(req.params.id, (err, emp) => {
    if (err) {
      return res.status(500).send({ error: "Problem with Deleting the Employee recored" })
    }
    res.send({ success: 'Employee deleted successfully' })
  })
}

module.exports.remove = remove
module.exports.update = update
module.exports.create = create
module.exports.view = view