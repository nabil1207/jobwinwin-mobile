import { Helper } from '../../utils';

export class Contact {

    private id: string;
    private _fullName: string;
    private _email: string;
    private _phoneNumber: string;
    private _message: string;

    constructor(company?) {
        this.id = company.id;
        this.fullName = company.fullName;
        this.email = company.email;
        this.phoneNumber = company.phoneNumber;
        this.message = company.message;
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(fullName: string) {
        this._fullName = fullName;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    public get message(): string {
        return this._message;
    }

    public set message(message: string) {
        this._message = message;
    }

    /**
     * get value
     */
    public get ObjectToJson(): object {
        return Helper.getObjectValues(this, ['_id', 'fullName', 'email', 'phoneNumber', 'message']);
    }

}