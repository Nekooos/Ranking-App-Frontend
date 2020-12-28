import { Competition } from './Competition';
import { User } from './User';

export class Result {
    id: string;
    discipline: string;
    reportedPerformance: string;
    announcedPerformance: string;
    points: number;
    card: string;
    remarks: string;
    user: User;
    competition: Competition;
}