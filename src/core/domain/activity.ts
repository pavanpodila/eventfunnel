enum ActivityLevel {
    beginner = 'beginner',
    intermediate = 'intermediate',
    advanced = 'advanced',
}

enum ActivityStatus {
    submitted = 'submitted',
    inReview = 'inReview',
    accepted = 'accepted',
    deferred = 'deferred',
}

export interface Activity {
    id: string;
    eventId: string;
    title: string;
    status: ActivityStatus;
    abstract: string;
    description: string;
    speakerId: string;
    level: ActivityLevel;
    category: string;
    type: string;
    durationInMinutes: number;
    createdOn: Date;
    modifiedOn: Date;
    votes: number;
}
