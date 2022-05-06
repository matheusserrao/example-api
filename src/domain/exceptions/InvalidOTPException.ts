export class InvalidOTPException extends Error {

    constructor() {
        super("Invalid OTP");
    }
}