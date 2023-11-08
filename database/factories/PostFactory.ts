import Post from 'App/Models/Post'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    content: faker.lorem.paragraphs(3),
  }
}).build()
