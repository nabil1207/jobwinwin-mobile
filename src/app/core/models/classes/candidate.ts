import { User } from './user';
import { Experience, Skill, Study, Training, Languages } from '../interfaces';
import { Value } from './value';
import { File } from './file';
import { ManagerialLevel } from './managerialLevel';
import { Effective } from './effective';
import { Function } from './function';
import { Contract } from './contract';
import { JobType } from './jobType';
import { ActivitySector } from './activitySector';
import { JobMode } from './jobMode';
import { Availability } from './availability';

export class Candidate extends User {

    private _currentJob: string;
    private _location: string;
    private _experienceYears: string;
    private _goal: string;
    private _currentLocation: string;
    private _searchedPost: string;
    private _gender: string;
    private _birthday: Date;
    private _currentSalary: number;
    private _supposedSalaryMin: number;
    private _supposedSalaryMax: number;
    private _video: File;
    private _cv: File;
    private _managerialLevel: ManagerialLevel;
    private _effective: Effective;
    private _function: Function;
    private _contract: Contract;
    private _jobType: JobType;
    private _activitySector: ActivitySector;
    private _jobMode: JobMode;
    private _values: any[];
    private _experiences: Experience[];
    private _trainings: Training[];
    private _languages: Languages[];
    private _availability: Availability;
    private _webSite: string;
    private _blog: string;
    private _linkedin: string;
    private _instagram: string;
    private _twitter: string;
    private _facebook: string;
    private _programingLanguages: any[];
    private _skills: any[];
    private _completed: boolean;

    constructor(candidate?) {
        super(candidate);
        this._id = candidate._id;
        this.currentJob = candidate.currentJob;
        this.location = candidate.location;
        this.goal = candidate.goal;
        this.birthday = candidate.birthday;
        this.gender = candidate.gender;
        this.searchedPost = candidate.searchedPost;
        this.experienceYears = candidate.experienceYears;
        this.currentSalary = candidate.currentSalary;
        this.managerialLevel = candidate.managerialLevel;
        this.supposedSalaryMin = candidate.supposedSalaryMin;
        this.supposedSalaryMax = candidate.supposedSalaryMax;
        this.video = candidate.video;
        this.cv = candidate.cv;
        this.values = candidate.values;
        this.experiences = candidate.experiences;
        this.trainings = candidate.trainings;
        this.languages = candidate.languages;
        this.availability = candidate.availability;
        this.webSite = candidate.webSite;
        this.blog = candidate.blog;
        this.linkedin = candidate.linkedin;
        this.instagram = candidate.instagram;
        this.twitter = candidate.twitter;
        this.facebook = candidate.facebook;
        this.currentLocation = candidate.currentLocation;
        this.programingLanguages = candidate.programingLanguages;
        this.skills = candidate.skills;
        this.completed = candidate.completed;
    }

    public get currentJob(): string {
        return this._currentJob;
    }

    public set currentJob(currentJob: string) {
        this._currentJob = currentJob;
    }

    public get goal(): string {
        return this._goal;
    }

    public set goal(goal: string) {
        this._goal = goal;
    }

    public get searchedPost(): string {
        return this._searchedPost;
    }

    public set searchedPost(searchedPost: string) {
        this._searchedPost = searchedPost;
    }

    public get currentSalary(): number {
        return this._currentSalary;
    }

    public set currentSalary(currentSalary: number) {
        this._currentSalary = currentSalary;
    }

    public get birthday(): Date {
        return this._birthday;
    }

    public set birthday(birthday: Date) {
        this._birthday = birthday;
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

    public get availability(): Availability {
        return this._availability;
    }

    public set availability(availability: Availability) {
        this._availability = availability;
    }

    public get video(): File {
        return this._video;
    }

    public set video(video: File) {
        this._video = video;
    }

    public get cv(): File {
        return this._cv;
    }

    public set cv(cv: File) {
        this._cv = cv;
    }

    public get values(): any[] {
        return this._values;
    }

    public set values(values: any[]) {
        this._values = values;
    }

    public get experiences(): Experience[] {
        return this._experiences;
    }

    public set experiences(experiences: Experience[]) {
        this._experiences = experiences;
    }

    public get trainings(): Training[] {
        return this._trainings;
    }

    public set trainings(trainings: Training[]) {
        this._trainings = trainings;
    }

    public get languages(): Languages[] {
        return this._languages;
    }

    public set languages(languages: Languages[]) {
        this._languages = languages;
    }

    public get webSite(): string {
        return this._webSite;
    }

    public set webSite(webSite: string) {
        this._webSite = webSite;
    }

    public get blog(): string {
        return this._blog;
    }

    public set blog(blog: string) {
        this._blog = blog;
    }

    public get linkedin(): string {
        return this._linkedin;
    }

    public set linkedin(linkedin: string) {
        this._linkedin = linkedin;
    }

    public get instagram(): string {
        return this._instagram;
    }

    public set instagram(instagram: string) {
        this._instagram = instagram;
    }

    public get twitter(): string {
        return this._twitter;
    }

    public set twitter(twitter: string) {
        this._twitter = twitter;
    }

    public get facebook(): string {
        return this._facebook;
    }

    public set facebook(facebook: string) {
        this._facebook = facebook;
    }

    public get gender(): string {
        return this._gender;
    }

    public set gender(gender: string) {
        this._gender = gender;
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

    public get function(): Function {
        return this._function;
    }

    public set function(func: Function) {
        this._function = func;
    }

    public get contract(): Contract {
        return this._contract;
    }

    public set contract(contract: Contract) {
        this._contract = contract;
    }

    public get jobType(): JobType {
        return this._jobType;
    }

    public set jobType(jobType: JobType) {
        this._jobType = jobType;
    }

    public get activitySector(): ActivitySector {
        return this._activitySector;
    }

    public set activitySector(activitySector: ActivitySector) {
        this._activitySector = activitySector;
    }

    public get jobMode(): JobMode {
        return this._jobMode;
    }

    public set jobMode(jobMode: JobMode) {
        this._jobMode = jobMode;
    }

    public get experienceYears(): string {
        return this._experienceYears;
    }

    public set experienceYears(experienceYears: string) {
        this._experienceYears = experienceYears;
    }

    public get location(): string {
        return this._location;
    }

    public set location(location: string) {
        this._location = location;
    }

    public get currentLocation(): string {
        return this._currentLocation;
    }

    public set currentLocation(currentLocation: string) {
        this._currentLocation = currentLocation;
    }

    public get programingLanguages(): any[] {
        return this._programingLanguages;
    }

    public set programingLanguages(programingLanguages: any[]) {
        this._programingLanguages = programingLanguages;
    }

    public get skills(): any[] {
        return this._skills;
    }

    public set skills(skills: any[]) {
        this._skills = skills;
    }

    public get completed(): boolean {
        return this._completed;
    }

    public set completed(completed: boolean) {
        this._completed = completed;
    }

}