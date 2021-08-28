import { Posts, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePostDto): Promise<Posts>;
    count: <T extends {
        where?: Prisma.PostsWhereInput;
        orderBy?: Prisma.Enumerable<Prisma.PostsOrderByInput>;
        cursor?: Prisma.PostsWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: Prisma.Enumerable<Prisma.PostsScalarFieldEnum>;
        select?: true | Prisma.PostsCountAggregateInputType;
    }>(args?: Prisma.Subset<T, {
        where?: Prisma.PostsWhereInput;
        orderBy?: Prisma.Enumerable<Prisma.PostsOrderByInput>;
        cursor?: Prisma.PostsWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: Prisma.Enumerable<Prisma.PostsScalarFieldEnum>;
        select?: true | Prisma.PostsCountAggregateInputType;
    }>) => import(".prisma/client").PrismaPromise<T extends Prisma._Record<"select", any> ? T["select"] extends true ? number : { [P in keyof T["select"]]: P extends keyof Prisma.PostsCountAggregateOutputType ? Prisma.PostsCountAggregateOutputType[P] : never; } : number>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostsWhereUniqueInput;
        where?: Prisma.PostsWhereInput;
        orderBy?: Prisma.PostsOrderByInput;
    }): Promise<Posts[]>;
    findOne(id: string): Promise<Posts>;
    update(id: string, data: UpdatePostDto): Promise<Posts>;
    remove(id: string): Promise<Posts>;
}
