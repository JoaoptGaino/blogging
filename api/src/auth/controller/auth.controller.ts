import { UseGuards } from '@nestjs/common';
import { Controller, Post, Request } from '@nestjs/common';
import { JwtAuthGuard, LocalAuthGuard } from '../../security/guards';
import { Public } from '../../decorators';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const loginData = await this.authService.login(req.body);
    return loginData;
  }
}
