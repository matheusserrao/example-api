
export interface ISenderSMS {
    send(email: string, otpCode: number, phone: string): Promise<void>;
}