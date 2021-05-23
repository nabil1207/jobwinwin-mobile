import { User } from './user';
import { Helper } from '../../utils';

export class UserContact {

    private id: string;
    private _subject: string;
    private _content: string;
    private _user: User;

    constructor(userContact?) {
        this._id = userContact._id
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get subject(): string {
        return this._subject;
    }

    public set subject(subject: string) {
        this._subject = subject;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get user(): User {
        return this._user;
    }

    public set user(user: User) {
        this._user = user;
    }

}