const UserModel = require('../models/user-model')

module.exports = {
  create: (req, res) => {
    let user = new UserModel({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      team: req.body.team,
    })

    user.save().then(result => {
        response.json({
          success: true,
          result,
        })
      })
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },
  update: (req, res) => {
    UserModel.update({ _id: req.body._id }, req.body)
      .then(user => {
        if (!user) res.json({ success: false, result: 'User does not exist' })

        res.json(user)
      })
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },
  get: (req, res) => {
    UserModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: 'No user found' })

        res.json({ success: true, result })
      })
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },
  delete: () => {
    // ???
  }
}

// MVC
// const data = {
//   name: 'Luffy'
// }

// const getUser = (data) => data.name

// console.log(getUser(data))