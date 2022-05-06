import { injectable } from 'tsyringe';
import { GenerateOTPCode } from '@app/application/usecases/GeneratorOTPCode';
import { SenderNotification } from '@application/usecases/SenderNotification';
import { OTP } from '@domain/models/OTP';
import { User } from '@domain/models/User';

@injectable()
export class SendOTP {

    constructor(
        private readonly generatorOTPCode: GenerateOTPCode,
        private readonly sendNotificationUser: SenderNotification
        ) {
    }
    
    async send(otp: OTP, user: User) {
        await this.generatorOTPCode.execute(otp);
        await this.sendNotificationUser.execute(user);
    }
}