import { injectable } from "tsyringe";
import { ISenderSMS } from "@application/services/sms/ISenderSMS";

@injectable()
export class SenderSMS implements ISenderSMS {
    async send(): Promise<void> {
        console.log('[Sender SMS]: Enviando sms para o usuário');
    }
}