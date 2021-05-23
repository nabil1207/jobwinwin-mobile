export class Notif {
    private id: string;
    private _firstName: string;
    private _lastName: string;
    private _status: string;
    private _time: Date;
    private _type: string;

    constructor(notif?) {
        this._id = notif._id;
        this.firstName = notif.firstName;
        this._lastName = notif._lastName;
        this.status = notif.status;
        this.time = notif.time;
        this.type = notif.type;
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    public get status(): string {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    public get time(): Date {
        return this._time;
    }

    public set time(time: Date) {
        this._time = time;
    }

    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

}