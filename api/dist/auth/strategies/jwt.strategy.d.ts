import { Strategy } from 'passport-jwt';
import { IPayloadJWT } from '../context/models';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: IPayloadJWT): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
