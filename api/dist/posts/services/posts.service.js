"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const utils_1 = require("../../utils");
let PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.count = this.prisma.posts.count;
    }
    async create(data) {
        try {
            const posts = await this.prisma.posts.create({ data });
            return utils_1.transformerUnique(posts);
        }
        catch (err) {
            throw new common_1.BadRequestException({
                message: `Motivo: ${err.message}`,
                error: err.message,
            });
        }
    }
    async findAll(params) {
        const { cursor, orderBy, skip, take, where } = params;
        const allPosts = await this.prisma.posts.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: { User: true },
        });
        return utils_1.transformer(allPosts);
    }
    async findOne(id) {
        const post = await this.prisma.posts.findUnique({ where: { id } });
        if (!post) {
            throw new common_1.NotFoundException();
        }
        return utils_1.transformerUnique(post);
    }
    async update(id, data) {
        try {
            const updatedPost = await this.prisma.posts.update({
                where: { id },
                data,
            });
            return utils_1.transformerUnique(updatedPost);
        }
        catch (err) {
            throw new common_1.BadRequestException({
                message: `Motivo: ${err.message}`,
                error: err.message,
            });
        }
    }
    async remove(id) {
        try {
            const deletedPost = await this.prisma.posts.delete({
                where: { id },
            });
            return utils_1.transformerUnique(deletedPost);
        }
        catch (err) {
            throw new common_1.BadRequestException({
                message: `Motivo: ${err.message}`,
                error: err.message,
            });
        }
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map