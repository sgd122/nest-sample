import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])], //UserRepository 등록
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
