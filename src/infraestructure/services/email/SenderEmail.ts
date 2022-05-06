
import { injectable } from 'tsyringe';
import { ISenderEmail } from '../../../application/services/email/ISenderEmail';

@injectable()
export class SenderEmail implements ISenderEmail {
    
    async send(): Promise<void> {
        console.log('[Sender With Gmail]: Enviando notificação para o usuário pelo GMAIL');
    }
}