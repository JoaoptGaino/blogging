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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("../services/posts.service");
const create_post_dto_1 = require("../dto/create-post.dto");
const update_post_dto_1 = require("../dto/update-post.dto");
const client_1 = require("@prisma/client");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    create(createPostDto) {
        return this.postsService.create(createPostDto);
    }
    async findAll(skip, limit, take, cursor, sort, title, userId) {
        const where = {
            title: { contains: title, mode: 'insensitive' },
            userId: userId && Number(userId),
        };
        const totalCount = await this.postsService.count();
        const posts = await this.postsService.findAll({
            take: limit || take ? Number(limit !== null && limit !== void 0 ? limit : take) : undefined,
            orderBy: sort,
            skip: skip && Number(skip),
            cursor: cursor && {
                id: cursor,
            },
            where,
        });
        return {
            totalCount,
            posts,
        };
    }
    findOne(id) {
        return this.postsService.findOne(id);
    }
    update(id, updatePostDto) {
        return this.postsService.update(id, updatePostDto);
    }
    remove(id) {
        return this.postsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('skip')),
    __param(1, common_1.Query('limit')),
    __param(2, common_1.Query('take')),
    __param(3, common_1.Query('cursor')),
    __param(4, common_1.Query('sort')),
    __param(5, common_1.Query('title')),
    __param(6, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object, String, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "remove", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map