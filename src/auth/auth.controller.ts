import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): {
    accessToken: string;
  } {
    return this.authService.signIn(authCredentialsDto);
  }
}
