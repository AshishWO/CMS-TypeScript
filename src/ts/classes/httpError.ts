export class httpError extends Error {
    constructor(message: string, public status: number) {
        super(message);
        this.status = status || 500;
    }
}
