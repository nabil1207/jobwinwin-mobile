import {
    Company, SoftSkills, Language, File, JobType,
    Function, ActivitySector, Recruiter
} from '.';
import { Languages } from '../interfaces/languages';
import { JobMode } from './jobMode';
import { ExperienceYears } from './experienceYears';
import { ManagerialLevel } from './managerialLevel';
import { Effective } from './effective';
import { TypeOfTraining } from './typeOfTraining';
import { Contract } from './contract';
import { Value } from './value';
import { Helper } from '../../utils';
import { LevelOfStudy } from './levelOfStudy';

export class Advertisement {

    private id: string;
    private _startedDate: Date;
    private _supposedSalaryMin: number;
    private _supposedSalaryMax: number;
    private _otherAdvantage: string;
    private _tasks: string[];
    private _prerequisite: string;
    private _desiredJob: string;
    private _experienceYears: ExperienceYears;
    private _managerialLevel: ManagerialLevel;
    private _effective: Effective;
    private _typeOfTraining: TypeOfTraining;
    private _softSkills: SoftSkills[];
    private _languages: Languages[];
    private _logo: File;
    private _jobType: JobType;
    private _company: Company;
    private _function: Function;
    private _jobMode: JobMode;
    private _location: Location;
    private _activitySector: ActivitySector;
    private _contract: Contract;
    private _recruiter: Recruiter;
    private _status: string;
    private _programmingSkills: string[];
    private _programingLanguages: any[];
    private _missions: string;
    private _descriptions: string[];
    private _views: number;
    private _wins: number;
    private _profile: string;
    private _levelOfStudies: LevelOfStudy;
    private _updatedAt: Date;
    private _values: any[];
    private _skills: any[];
    private _usageTitles: string[];

    constructor(advertisement?) {
        this._id = advertisement._id;
        this.startedDate = advertisement.startedDate;
        this.supposedSalaryMin = advertisement.supposedSalaryMin;
        this.supposedSalaryMax = advertisement.supposedSalaryMax;
        this.otherAdvantage = advertisement.otherAdvantage;
        this.tasks = advertisement.tasks;
        this.prerequisite = advertisement.prerequisite;
        this.desiredJob = advertisement.desiredJob;
        this.experienceYears = advertisement.experienceYears;
        this.managerialLevel = advertisement.managerialLevel;
        this.effective = advertisement.effective;
        this.typeOfTraining = advertisement.typeOfTraining;
        this.softSkills = advertisement.softSkills;
        this.skills = advertisement.skills;
        this.languages = advertisement.languages;
        this.logo = advertisement.logo;
        this.jobType = advertisement.jobType;
        this.company = advertisement.company;
        this.function = advertisement.function;
        this.location = advertisement.location;
        this.activitySector = advertisement.activitySector;
        this.contract = advertisement.contract;
        this.recruiter = advertisement.recruiter;
        this.wins = advertisement.wins;
        this.views = advertisement.views;
        this.updatedAt = advertisement.updatedAt;
        this.status = advertisement.status;
        this.missions = advertisement.missions;
        this.descriptions = advertisement.descriptions;
        this.programmingSkills = advertisement.programmingSkills;
        this.programingLanguages = advertisement.programingLanguages;
        this.jobMode = advertisement.jobMode;
        this.profile = advertisement.profile;
        this.usageTitles = advertisement.usageTitles;
        this.levelOfStudies = advertisement.levelOfStudies;
    }

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }

    public get startedDate(): Date {
        return this._startedDate;
    }

    public set startedDate(startedDate: Date) {
        this._startedDate = startedDate;
    }

    public get supposedSalaryMin(): number {
        return this._supposedSalaryMin;
    }

    public set supposedSalaryMin(supposedSalaryMin: number) {
        this._supposedSalaryMin = supposedSalaryMin;
    }

    public get supposedSalaryMax(): number {
        return this._supposedSalaryMax;
    }

    public set supposedSalaryMax(supposedSalaryMax: number) {
        this._supposedSalaryMax = supposedSalaryMax;
    }

    public get otherAdvantage(): string {
        return this._otherAdvantage;
    }

    public set otherAdvantage(otherAdvantage: string) {
        this._otherAdvantage = otherAdvantage;
    }

    public get tasks(): string[] {
        return this._tasks;
    }

    public set tasks(tasks: string[]) {
        this._tasks = tasks;
    }

    public get prerequisite(): string {
        return this._prerequisite;
    }

    public set prerequisite(prerequisite: string) {
        this._prerequisite = prerequisite;
    }

    public get desiredJob(): string {
        return this._desiredJob;
    }

    public set desiredJob(desiredJob: string) {
        this._desiredJob = desiredJob;
    }

    public get experienceYears(): ExperienceYears {
        return this._experienceYears;
    }

    public set experienceYears(experienceYears: ExperienceYears) {
        this._experienceYears = experienceYears;
    }

    public get managerialLevel(): ManagerialLevel {
        return this._managerialLevel;
    }

    public set managerialLevel(managerialLevel: ManagerialLevel) {
        this._managerialLevel = managerialLevel;
    }

    public get effective(): Effective {
        return this._effective;
    }

    public set effective(effective: Effective) {
        this._effective = effective;
    }

    public get typeOfTraining(): TypeOfTraining {
        return this._typeOfTraining;
    }

    public set typeOfTraining(typeOfTraining: TypeOfTraining) {
        this._typeOfTraining = typeOfTraining;
    }

    public get softSkills(): SoftSkills[] {
        return this._softSkills;
    }

    public set softSkills(softSkills: SoftSkills[]) {
        this._softSkills = softSkills;
    }

    public get languages(): Languages[] {
        return this._languages;
    }

    public set languages(languages: Languages[]) {
        this._languages = languages;
    }

    public get logo(): File {
        return this._logo;
    }

    public set logo(logo: File) {
        this._logo = logo;
    }

    public get jobType(): JobType {
        return this._jobType;
    }

    public set jobType(jobType: JobType) {
        this._jobType = jobType;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(company: Company) {
        this._company = company;
    }

    public get function(): Function {
        return this._function;
    }

    public set function(fun: Function) {
        this._function = fun;
    }

    public get location(): Location {
        return this._location;
    }

    public set location(location: Location) {
        this._location = location;
    }

    public get activitySector(): ActivitySector {
        return this._activitySector;
    }

    public set activitySector(activitySector: ActivitySector) {
        this._activitySector = activitySector;
    }

    public get contract(): Contract {
        return this._contract;
    }

    public set contract(contract: Contract) {
        this._contract = contract;
    }

    public get recruiter(): Recruiter {
        return this._recruiter;
    }

    public set recruiter(recruiter: Recruiter) {
        this._recruiter = recruiter;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }

    public get views(): number {
        return this._views;
    }

    public set views(views: number) {
        this._views = views;
    }

    public get wins(): number {
        return this._wins;
    }

    public set wins(wins: number) {
        this._wins = wins;
    }

    public get status(): string {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    public get missions(): string {
        return this._missions;
    }

    public set missions(missions: string) {
        this._missions = missions;
    }

    public get descriptions(): string[] {
        return this._descriptions;
    }

    public set descriptions(descriptions: string[]) {
        this._descriptions = descriptions;
    }
    public get programmingSkills(): string[] {
        return this._programmingSkills;
    }

    public set programmingSkills(programmingSkills: string[]) {
        this._programmingSkills = programmingSkills;
    }

    public get programingLanguages(): any[] {
        return this._programingLanguages;
    }

    public set programingLanguages(programingLanguages: any[]) {
        this._programingLanguages = programingLanguages;
    }

    public get jobMode(): JobMode {
        return this._jobMode;
    }

    public set jobMode(jobMode: JobMode) {
        this._jobMode = jobMode;
    }

    public get profile(): string {
        return this._profile;
    }

    public set profile(profile: string) {
        this._profile = profile;
    }

    public get values(): any[] {
        return this._values;
    }

    public set values(values: any[]) {
        this._values = values;
    }

    public get skills(): any[] {
        return this._skills;
    }

    public set skills(skills: any[]) {
        this._skills = skills;
    }

    public get usageTitles(): string[] {
        return this._usageTitles;
    }

    public set usageTitles(usageTitles: string[]) {
        this._usageTitles = usageTitles;
    }

    public get levelOfStudies(): LevelOfStudy {
        return this._levelOfStudies;
    }

    public set levelOfStudies(levelOfStudies: LevelOfStudy) {
        this._levelOfStudies = levelOfStudies;
    }

    /**
     * convert object to json
     */
    public toJson() {
        const properties = ['_id', 'startedDate', 'supposedSalaryMin', 'supposedSalaryMax', 'otherAdvantage',
            'tasks', 'prerequisite', 'desiredJob', 'experienceYears', 'managerialLevel', 'effective', 'typeOfTraining',
            'softSkills', 'languages', 'logo', 'jobType',
            'company', 'function', 'jobMode', 'location', 'activitySector', 'contract', 'recruiter', 'status', 'programmingSkills',
            'programingLanguages', 'missions', 'descriptions', 'views', 'wins', 'profile', 'updatedAt', 'values',
            'skills', 'usageTitles', 'levelOfStudies'];
        return Helper.objectToString(properties, this);
    }

}