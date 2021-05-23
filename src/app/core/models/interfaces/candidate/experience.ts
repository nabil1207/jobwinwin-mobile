import { ExperienceYears } from '../../classes/experienceYears';
import { ActivitySector } from '../../classes/activitySector';

export interface Experience {
    id: number;
    experienceYears: ExperienceYears;
    job: string;
    function: Function;
    startedDate: Date;
    endDate: Date;
    company: string;
    activitySector: ActivitySector;
    location: Location;
}