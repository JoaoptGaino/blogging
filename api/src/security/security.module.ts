import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/auth/services/auth.service';
import { PrismaService } from '../prisma.service';
import { UsersModule } from '../users/users.module';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { SecurityService } from './services/security.service';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      session: true,
    }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: 'ase13213asdj1io232190',
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [
    AuthService,
    SecurityService,
    LocalStrategy,
    JwtStrategy,
    LocalAuthGuard,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [SecurityService, LocalStrategy, JwtStrategy, LocalAuthGuard],
})
export class SecurityModule {}
