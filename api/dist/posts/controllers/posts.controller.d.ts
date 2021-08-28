import { PostsService } from '../services/posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Prisma } from '@prisma/client';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Posts>;
    findAll(skip?: string, limit?: string, take?: string, cursor?: string, sort?: Prisma.PostsOrderByInput, title?: string, userId?: string): Promise<{
        totalCount: number;
        posts: import(".prisma/client").Posts[];
    }>;
    findOne(id: string): Promise<import(".prisma/client").Posts>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import(".prisma/client").Posts>;
    remove(id: string): Promise<import(".prisma/client").Posts>;
}
