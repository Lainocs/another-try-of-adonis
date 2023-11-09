import User from "App/Models/User";
import { PostFactory } from "Database/factories/PostFactory";
import Factory from "@ioc:Adonis/Lucid/Factory";


export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    password: '$scrypt$n=16384,r=8,p=1$fGskGHSOkZ0ARQ60JZo1mg$26x5onePj8KJPWNvQlndt02WGM7V64/eL59H5oP9UFlbtr0StSE8xgKYNRwWOG84cbvaGnPQV7vH0WmdeoKKNg' // password
  };
})
  .relation("posts", () => PostFactory)
  .build();
