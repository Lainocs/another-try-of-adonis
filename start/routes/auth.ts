import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.get('/me', 'AuthController.me').middleware('auth')
  Route.post('/logout', 'AuthController.logout').middleware('auth')
}).prefix('/auth')
