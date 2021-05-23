import { Advertisement } from './advertisement';
import { User } from './user';
import { Function } from './function';
import { Manager } from './manager';

export class Recruiter extends User {

    protected _firstPhoneNumber: string;
    protected _secondPhoneNumber: string;
    protected _function: string;
    protected _manager: Manager;
    protected _advertisements: Advertisement;

    constructor(recruiter?) {
        super(recruiter);
        this.firstPhoneNumber = recruiter.firstPhoneNumber;
        this.secondPhoneNumber = recruiter.secondPhoneNumber;
        this.function = recruiter.function;
        this.manager = recruiter.manager;
        this.advertisements = recruiter.advertisements;
        this.civility = recruiter.civility;
    }

    public get firstPhoneNumber(): string {
        return this._firstPhoneNumber;
    }

    public set firstPhoneNumber(firstPhoneNumber: string) {
        this._firstPhoneNumber = firstPhoneNumber;
    }

    public get secondPhoneNumber(): string {
        return this._secondPhoneNumber;
    }

    public set secondPhoneNumber(secondPhoneNumber: string) {
        this._secondPhoneNumber = secondPhoneNumber;
    }

    public get manager(): Manager {
        return this._manager;
    }

    public set manager(manager: Manager) {
        this._manager = manager;
    }

    public get advertisements(): Advertisement {
        return this._advertisements;
    }

    public set advertisements(advertisements: Advertisement) {
        this._advertisements = advertisements;
    }

    public get function(): string {
        return this._function;
    }

    public set function(fun: string) {
        this._function = fun;
    }

    /**
     * get values
     */
    getValues() {
        return {
            _id: this._id,
            firstPhoneNumber: this.firstPhoneNumber,
            secondPhoneNumber: this.secondPhoneNumber,
            function: this.function,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            civility: this.civility,
            picture: this.picture
        }
    }

}