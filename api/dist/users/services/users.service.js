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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const hashedPass = await this.hashPassword(data.password);
        const newUser = Object.assign(Object.assign({}, data), { password: hashedPass });
        const user = await this.prisma.user.create({ data: newUser });
        return user;
    }
    async findAll(params) {
        const { skip, cursor, orderBy, take, where } = params;
        const allUsers = await this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
        return allUsers;
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async findUserByEmail(email) {
        return await this.prisma.user.findFirst({ where: { email } });
    }
    async update(id, updateUserDto) {
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
        return updatedUser;
    }
    async remove(id) {
        const user = await this.prisma.user.delete({
            where: { id },
        });
        return user;
    }
    async hashPassword(password) {
        const salt = await bcrypt_1.genSalt(10);
        return bcrypt_1.hash(password, salt);
    }
    async comparePassword(providedPass, storedPassword) {
        return bcrypt_1.compare(providedPass, storedPassword);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map