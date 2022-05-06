import { InvalidOTPException } from '@domain/exceptions/InvalidOTPException';

export class OTP {

    constructor(private readonly code: number) {
        if (!code) {
            throw new InvalidOTPException();
        }
    }

    getCode() {
        return this.code;
    }
}