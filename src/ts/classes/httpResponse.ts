export class httpResponse {
    constructor(
        public statusCode: number,
        public status: string,
        public data: any,
        public message: string
    ) {
        this.statusCode = statusCode || 200;
        this.status = status || "SUCCESS";
        this.data = data || null;
        this.message = message || "";
    }
}
