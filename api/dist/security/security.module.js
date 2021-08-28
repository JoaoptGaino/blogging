"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/services/auth.service");
const prisma_service_1 = require("../prisma.service");
const users_module_1 = require("../users/users.module");
const guards_1 = require("./guards");
const security_service_1 = require("./services/security.service");
const strategies_1 = require("./strategies");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule.register({
                session: true,
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory: async () => ({
                    secret: 'ase13213asdj1io232190',
                    signOptions: { expiresIn: '1d' },
                }),
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            security_service_1.SecurityService,
            strategies_1.LocalStrategy,
            strategies_1.JwtStrategy,
            guards_1.LocalAuthGuard,
            prisma_service_1.PrismaService,
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.JwtAuthGuard,
            },
        ],
        exports: [security_service_1.SecurityService, strategies_1.LocalStrategy, strategies_1.JwtStrategy, guards_1.LocalAuthGuard],
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map