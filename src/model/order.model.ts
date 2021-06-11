export enum State {
    CREATED,
    ESTIMATE_SENT,
    ACCEPTED,
    INVOICE_SENT,
    PAID,
    CLOSED,
    REJECTED
}

export class Order {
    state: State;
    client: string;
    estimates: string[];
    invoice: string;


    constructor(client?: string, state = State.CREATED, invoice?: string, estimates?: string[]) {
        this.state = state;
        this.client = client;
        this.estimates = estimates;
        this.invoice = invoice;
    }
}
