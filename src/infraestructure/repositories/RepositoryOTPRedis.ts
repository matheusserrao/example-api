import { injectable } from 'tsyringe';
import { IRepositoryOTP } from '@application/repositories/IRepositoryOTP';
import { OTP } from '@app/domain/models';

@injectable()
export class RepositoryOTPRedis implements IRepositoryOTP {

    constructor() {
        console.log('Conectando no REDIS');
    }
    
    findOtpByUserId(userId: string): Promise<OTP> {
        throw new Error('Method not implemented.');
    }

    async save(): Promise<boolean> {
        console.log('salvando OTP no redis');
        return true;
    }
}