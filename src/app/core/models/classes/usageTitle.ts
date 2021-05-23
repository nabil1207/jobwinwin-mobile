import { Repertoire } from '.';

export class UsageTitle extends Repertoire {

    static tableName = 'directory-ms/usage-titles';

    constructor(typeOfTraining?) {
        super(typeOfTraining);
    }

}