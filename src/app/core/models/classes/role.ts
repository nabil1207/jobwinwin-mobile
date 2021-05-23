import { Right } from '.';

export class Role {

    private id: string;
    private _name: string;
    private _description: string;
    private _rights: Right;
    private _isSystem: boolean;

    constructor(role?) {
        this._id = role._id;
        this.name = role.name;
        this.description = role.description;
        this.rights = role.rights;
        this.isSystem = role.isSystem;
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

    public get rights(): Right {
        return this._rights;
    }

    public set rights(rights: Right) {
        this._rights = rights;
    }

    public get isSystem(): boolean {
        return this._isSystem;
    }

    public set isSystem(isSystem: boolean) {
        this._isSystem = isSystem;
    }

}