import { Advertisement } from './advertisement';
import { User } from './user';
import { Function } from './function';
import { ManagerStatus } from '../enums';

export class Manager extends User {

    protected _firstPhoneNumber: string;
    protected _secondPhoneNumber: string;
    protected _function: string;
    protected _status: ManagerStatus;

    constructor(manager?) {
        super(manager)
        this._firstPhoneNumber = manager.firstPhoneNumber;
        this._secondPhoneNumber = manager.secondPhoneNumber;
        this._function = manager.function;
        this._status = manager.status;
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

    public get function(): string {
        return this._function;
    }

    public set function(func: string) {
        this._function = func;
    }

    public get status(): ManagerStatus {
        return this._status;
    }

    public set status(status: ManagerStatus) {
        this._status = status;
    }
}