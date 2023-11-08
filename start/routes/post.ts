import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'PostsController.getPosts')
  Route.get('/:id', 'PostsController.getPost')
  Route.post('/', 'PostsController.createPost')
  Route.put('/:id', 'PostsController.updatePost')
  Route.delete('/:id', 'PostsController.deletePost')
}).prefix('/posts')
