import { IAuthenticatedUser } from 'src/security/context/models';
import { SecurityService } from 'src/security/services';
export declare class AuthService {
    private readonly securityService;
    constructor(securityService: SecurityService);
    private readonly logger;
    login({ id, email }: IAuthenticatedUser): Promise<{
        user: {
            id: number;
            name: string;
            token: string;
        };
    }>;
    profile(user: IAuthenticatedUser): Promise<import("../../users/entities/user.entity").User>;
}
