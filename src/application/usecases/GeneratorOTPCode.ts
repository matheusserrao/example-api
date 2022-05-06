import { inject, injectable } from 'tsyringe';
import { IGeneratorOTPCode } from '@application/services/otp/IGeneratorOTPCode';
import { IRepositoryOTP } from '@application/repositories/IRepositoryOTP';
import { OTP } from '@domain/models/OTP';

@injectable()
export class GenerateOTPCode {

    constructor(
        @inject('IGeneratorOTPCode') private readonly generatorOTPCode: IGeneratorOTPCode,
        @inject('IRepositoryOTP') private readonly repositoryOTP: IRepositoryOTP
        ) {
    }

    async execute(otp: OTP) {
        const code = this.generatorOTPCode.generateCode();
        const saved = await this.repositoryOTP.save(otp);
    }
}