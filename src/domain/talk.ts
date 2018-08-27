enum TalkLevel {
    beginner = 'beginner',
    intermediate = 'intermediate',
    advanced = 'advanced',
}

enum TalkStatus {
    submitted = 'submitted',
    inReview = 'inReview',
    accepted = 'accepted',
    deferred = 'deferred',
}

export interface Talk {
    id: string;
    title: string;
    status: TalkStatus;
    abstract: string;
    description: string;
    speakers: string[];
    level: TalkLevel;
    category: string;
    type: string;
    durationInMinutes: number;
    createdOn: Date;
    modifiedOn: Date;
    votes: number;
}
