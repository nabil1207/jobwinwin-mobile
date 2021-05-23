import { TypeOfTraining } from '../../classes/typeOfTraining';

export interface Training {

    id: number;
    name: string;
    typeOfTraining: TypeOfTraining;
    yearOfGraduation: number;
    school: string;
    location: Location;

}