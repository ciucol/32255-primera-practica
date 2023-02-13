const User = require("./models/User.model")

class UserDao {
  async find() {
    try {
      const users = await User.find()
      return users
    } catch (error) {
      return error
    }
  }

  async create(newUser) {
    try {
      const response = await User.create(newUser)
      return response
    } catch (error) {
      return error
    }
  }

  async deleteMany() {
    try {
      await User.deleteMany()
      return 'Usuarios eliminados'
    } catch (error) {
      return error
    }
  }
}

module.exports = UserDao