import "reflect-metadata";

import { container, InjectionToken } from "tsyringe";
import { RepositoryOTPRedis } from "@infraestructure/repositories/RepositoryOTPRedis";
import { GeneratorOTPCode } from "@infraestructure/services/otp/GeneratorOTPCode";
import { SenderEmail } from "@infraestructure/services/email/SenderEmail";
import { SenderSMS } from "@infraestructure/services/sms/SenderSMS";

export class DependecyInjection {

    init() {

        container.register('IRepositoryOTP', {
            useClass: RepositoryOTPRedis,
        });

        container.register('ISenderEmail', {
            useClass: SenderEmail,
        });

        container.register('IGeneratorOTPCode', {
            useClass: GeneratorOTPCode,
        });

        container.register('ISenderSMS', {
            useClass: SenderSMS,
        });
    }

    getInstance<T>(injectionToken: InjectionToken<T>) {
        return container.resolve(injectionToken);
    }
}

