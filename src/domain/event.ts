export enum EventStatus {
    open,
    review,
    closed,
}

export interface Event {
    id: string;
    title: string;
    description: string;
    group: string;
    startDate: Date;
    endDate: Date;
    venue: string;
    status: EventStatus;
    email: string;
    phone: string;

    talks: string[];
}
