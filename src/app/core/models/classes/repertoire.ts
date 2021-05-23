import { User } from './user';

export class Repertoire {

    private id: string;
    private _name: string;

    constructor(repertoire?) {
        this._id = repertoire._id;
        this.name = repertoire.name;
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

}