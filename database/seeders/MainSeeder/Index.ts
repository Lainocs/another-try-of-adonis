import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import Post from "App/Models/Post";

import { UserFactory } from "Database/factories/UserFactory";

export default class extends BaseSeeder {
  public async run() {
    await User.truncate(true);
    await Post.truncate(true);
    
    await UserFactory.with("posts", 10).createMany(10);
  }
}
