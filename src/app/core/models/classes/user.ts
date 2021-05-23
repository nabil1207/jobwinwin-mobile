import { Role } from '.';
import { Company } from './company';
import { Candidate } from './candidate';
import { Recruiter } from './recruiter';
import { Manager } from './manager';

export class User {

    protected id: string;
    protected _fullName: string;
    protected _firstName: string;
    protected _lastName: string;
    protected _picture: File;
    protected _email: string;
    protected _phoneNumber: string;
    protected _role: Role
    protected _isActive: boolean;
    protected _civility: string;
    protected _company: Company;
    private _percentage: number;
    private _currentStep: number;
    private _userRole: string;
    // protected _candidate: Candidate;
    // protected _recruiter: Recruiter;
    // protected _manager: Manager;
    // protected _recruiters: Recruiter[];

    constructor(user?) {
        this._id = user._id;
        this.fullName = user.firstName + ' ' + user.lastName;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.picture = user.picture;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.role = user.role;
        this.isActive = user.isActive;
        this.company = user.company;
        this.percentage = user.percentage;
        this._userRole = user._userRole;
        this._currentStep = user.currentStep;
        // this.candidate = user.candidate;
        // this.recruiter = user.recruiter;
        // this.manager = user.manager;
        // this.recruiter = user.recruiter;
        // this.recruiters = user.recruiters;
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

    public get picture(): File {
        return this._picture;
    }

    public set picture(picture: File) {
        this._picture = picture;
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

    public get role(): Role {
        return this._role;
    }

    public set role(role: Role) {
        this._role = role;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive;
    }

    public get civility(): string {
        return this._civility;
    }

    public set civility(civility: string) {
        this._civility = civility;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(company: Company) {
        this._company = company;
    }

    public get percentage(): number {
        return this._percentage;
    }

    public set percentage(percentage: number) {
        this._percentage = percentage;
    }

    public get currentStep(): number {
        return this._currentStep;
    }

    public set currentStep(currentStep: number) {
        this._currentStep = currentStep;
    }

    public get userRole(): string {
        return this._userRole;
    }

    public set userRole(userRole: string) {
        this.userRole = userRole;
    }

}
