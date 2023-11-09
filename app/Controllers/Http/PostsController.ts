// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from "@ioc:Adonis/Core/Validator"
import Post from "App/Models/Post"
import PostValidator from "App/Validators/PostValidator"

export default class PostsController {
  
  public async getPosts() {
    return await Post.all()
  }

  public async getPost({ params }) {
    return await Post.findOrFail(params.id)
  }

  public async createPost({ request }) {

    const validatedData = await request.validate(PostValidator)

    const userId = 1

    const post = await Post.create({
      content: validatedData.content,
      userId
    })

    return post
  }

  public async updatePost({ params, request }) {
    const validationSchema = schema.create({
      content: schema.string()
    })

    const validatedData = await request.validate({
      schema: validationSchema,
    })

    const post = await Post.findOrFail(params.id)

    post.content = validatedData.content

    await post.save()

    return post
  }

  public async deletePost({ params }) {
    const post = await Post.findOrFail(params.id)

    await post.delete()

    return post
  }
}
