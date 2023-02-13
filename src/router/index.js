const controllerUsers = require('../users/controller.users')
const controllerProducts = require('../products/controller.products')

const router = (app) => {
  app.use('/users', controllerUsers)
  app.use('/products', controllerProducts)
}

module.exports = router