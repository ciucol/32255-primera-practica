const { Router } = require('express')
const UserDao = require('../dao/User.dao')
const User = new UserDao()

const router = Router()

router.get('/', async (req, res) => {
  try {
    const response = await User.find()

    const users = response.map(({ name, lastname }) => ({
      name,
      lastname
    }))

    res.json({ message: { users } })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, lastname } = req.body

    const newUser = {
      name,
      lastname
    }
    const response = await User.create(newUser)

    res.json({ message: response })
  } catch (error) {
    res.status(400).json({ error })
  }
})

router.delete('/', async (req, res) => {
  await User.deleteMany()
  res.json({ message: 'Todos los usuarios eliminados' })
})

module.exports = router