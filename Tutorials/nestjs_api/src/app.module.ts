import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth..module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, PrismaModule, UserModule, AuthModule],
})

export class AppModule {}
