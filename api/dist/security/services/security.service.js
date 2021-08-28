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
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../../users/services/users.service");
let SecurityService = class SecurityService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findUserByEmail(email);
        const isPassword = await this.usersService.comparePassword(password, user.password);
        if (user && isPassword) {
            return {
                id: user.id,
                name: user.username,
                email: user.email,
            };
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.userId };
        const token = this.jwtService.sign(payload);
        const userAuthenticated = await this.usersService.findUserByEmail(payload.email);
        return {
            user: {
                id: userAuthenticated.id,
                name: userAuthenticated.username,
                token,
            },
        };
    }
    async loggedProfile(userId) {
        if (userId) {
            return this.usersService.findOne(userId);
        }
        return null;
    }
};
SecurityService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map