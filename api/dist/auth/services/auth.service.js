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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../security/context/models");
const services_1 = require("../../security/services");
let AuthService = class AuthService {
    constructor(securityService) {
        this.securityService = securityService;
        this.logger = new common_1.Logger();
    }
    async login({ id, email }) {
        return this.securityService.login({
            userId: id,
            email: email,
        });
    }
    async profile(user) {
        return this.securityService.loggedProfile(user.id);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [services_1.SecurityService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map