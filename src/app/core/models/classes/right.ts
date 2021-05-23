import { User } from './user';

export class Right {

    private id: string;
    private _name: string;
    private _description: string;

    constructor(right?) {
        this._id = right._id;
        this.name = right.name;
        this.description = right.description;
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

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

}