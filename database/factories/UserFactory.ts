import User from "App/Models/User";
import { PostFactory } from "Database/factories/PostFactory";
import Factory from "@ioc:Adonis/Lucid/Factory";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
})
  .relation("posts", () => PostFactory)
  .build();
