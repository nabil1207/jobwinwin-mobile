import { Advertisement, Candidate, Recruiter } from '.';
import { Company } from './company';

export class Matching {

    private id: string;
    private _recruiter: Recruiter;
    private _candidate: Candidate;
    private _advertisement: Advertisement;
    private _company: Company;
    private _date: Date;

    constructor(matching?) {
        this._id = matching._id;
        this.recruiter = matching.recruiter;
        this.candidate = matching.candidate;
        this.advertisement = matching.advertisement;
        this.company = matching.company;
        this.date = matching.date;
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get recruiter(): Recruiter {
        return this._recruiter;
    }

    public set recruiter(recruiter: Recruiter) {
        this._recruiter = recruiter;
    }

    public get candidate(): Candidate {
        return this._candidate;
    }

    public set candidate(candidate: Candidate) {
        this._candidate = candidate;
    }

    public get advertisement(): Advertisement {
        return this._advertisement;
    }

    public set advertisement(advertisement: Advertisement) {
        this._advertisement = advertisement;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(company: Company) {
        this._company = company;
    }

}