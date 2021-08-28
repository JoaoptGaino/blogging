import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Posts, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { transformer, transformerUnique } from 'src/utils';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePostDto): Promise<Posts> {
    try {
      const posts = await this.prisma.posts.create({ data });
      return transformerUnique(posts);
    } catch (err) {
      throw new BadRequestException({
        message: `Motivo: ${err.message}`,
        error: err.message,
      });
    }
  }

  count = this.prisma.posts.count;

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostsWhereUniqueInput;
    where?: Prisma.PostsWhereInput;
    orderBy?: Prisma.PostsOrderByInput;
  }): Promise<Posts[]> {
    const { cursor, orderBy, skip, take, where } = params;
    const allPosts = await this.prisma.posts.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { User: true },
    });
    return transformer(allPosts);
  }

  async findOne(id: string): Promise<Posts> {
    const post = await this.prisma.posts.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundException();
    }
    return transformerUnique(post);
  }

  async update(id: string, data: UpdatePostDto): Promise<Posts> {
    try {
      const updatedPost = await this.prisma.posts.update({
        where: { id },
        data,
      });
      return transformerUnique(updatedPost);
    } catch (err) {
      throw new BadRequestException({
        message: `Motivo: ${err.message}`,
        error: err.message,
      });
    }
  }

  async remove(id: string): Promise<Posts> {
    try {
      const deletedPost = await this.prisma.posts.delete({
        where: { id },
      });
      return transformerUnique(deletedPost);
    } catch (err) {
      throw new BadRequestException({
        message: `Motivo: ${err.message}`,
        error: err.message,
      });
    }
  }
}
