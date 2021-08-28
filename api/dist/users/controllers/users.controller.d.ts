import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(skip?: string, limit?: string, take?: string, username?: string, cursor?: string, email?: string, sort?: Prisma.UserOrderByInput): Promise<{
        totalCount: number;
        users: import(".prisma/client").User[];
    }>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    findUserByEmail(email: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
