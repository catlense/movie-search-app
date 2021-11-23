import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";

@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ]
})

export class RegisterModule {

}