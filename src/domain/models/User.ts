
export class User {

    constructor(private readonly foxId: string) { 
        if (!foxId) {
            throw new Error('Fox ID is invalid');
        }
    }

    getFoxId() {
        return this.foxId;
    }
}