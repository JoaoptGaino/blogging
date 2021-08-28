import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: {
            id: number;
            name: string;
            token: string;
        };
    }>;
}
