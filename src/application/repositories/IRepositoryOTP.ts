import { OTP } from "@domain/models/OTP";

export interface IRepositoryOTP {
    save(otp: OTP): Promise<boolean>;
    findOtpByUserId(userId: string): Promise<OTP>;
}