import { inject, injectable } from 'tsyringe';

import { ISenderEmail } from '@application/services/email/ISenderEmail';
import { ISenderSMS } from '@application/services/sms/ISenderSMS';
import { User } from '@domain/models/User';

@injectable()
export class SenderNotification { 
    constructor(
        @inject('ISenderEmail') private readonly senderEmail: ISenderEmail,
        @inject('ISenderSMS') private readonly senderSMs: ISenderSMS
        ) { }

    async execute(user: User) {
        await this.senderEmail.send();
        await this.senderSMs.send('', 1, '');
    }
}