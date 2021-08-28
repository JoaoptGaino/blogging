import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';
import { IAuthenticatedUser, IUserSession } from '../context/models';
export declare class SecurityService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<IAuthenticatedUser>;
    login(user: IUserSession): Promise<{
        user: {
            id: number;
            name: string;
            token: string;
        };
    }>;
    loggedProfile(userId: number): Promise<User | null>;
}
