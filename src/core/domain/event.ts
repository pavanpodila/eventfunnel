export enum EventStatus {
    open,
    inReview,
    closed,
}

export interface Event {
    id: string;
    name: string;
    title: string;
    description: string;
    groupId: string;
    startTime: Date;
    endTime: Date;
    venue: string;
    googleMapsUrl: string;
    status: EventStatus;
    email: string;
    phone: string;

    activities: string[];
}
