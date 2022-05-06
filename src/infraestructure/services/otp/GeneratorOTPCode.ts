import { injectable } from 'tsyringe';
import { IGeneratorOTPCode } from '@application/services/otp/IGeneratorOTPCode';

@injectable()
export class GeneratorOTPCode implements IGeneratorOTPCode{
  
    async generateCode(): Promise<number> {
        console.log('generando OTP Code');
        return Math.random() * 100;
    }
}