import { Helper } from "../../utils";

export class Company {

    private id: string;
    private _name: string;
    private _title: string;
    private _managerFirstName: string;
    private _managerLastName: string;
    private _managerFirstPhoneNumber: string;
    private _managerSecondPhoneNumber: string;
    private _managerEmail: string;
    private _email: string;
    private _zipCode: string;
    private _country: string;
    private _city: string;
    private _rc: string;
    private _taxIdentification: string;
    private _ice: string;
    private _activitySector: string;
    private _phoneNumber: string;
    private _logo: string;
    private _webSite: string;
    private _linkedin: string;
    private _facebook: string;
    private _twitter: string;
    private _instagram: string;
    private _values: string;
    private _otherValues: string[];
    private _description: string;
    private _address: string;
    private _manager: string | any;

    constructor(company?) {
        this._id = company._id;
        this.name = company.name;
        this.title = company.title;
        this.email = company.email;
        this.zipCode = company.zipCode;
        this.country = company.country;
        this.rc = company.rc;
        this.taxIdentification = company.taxIdentification;
        this.ice = company.ice;
        this.phoneNumber = company.phoneNumber;
        this.logo = company.logo;
        this.webSite = company.webSite;
        this.linkedin = company.linkedin;
        this.facebook = company.facebook;
        this.twitter = company.twitter;
        this.values = company.values;
        this.description = company.description;
        this.otherValues = company.otherValues;
        this.managerFirstName = company.managerFirstName;
        this.managerLastName = company.managerLastName;
        this.managerFirstPhoneNumber = company.managerFirstPhoneNumber;
        this.managerSecondPhoneNumber = company.managerSecondPhoneNumber;
        this.managerEmail = company.managerEmail;
        this.city = company.city;
        this.activitySector = company.activitySector;
        this.manager = company.manager;
        this.address = company.address;
        this.instagram = company.instagram;
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

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get managerFirstName(): string {
        return this._managerFirstName;
    }

    public set managerFirstName(managerFirstName: string) {
        this._managerFirstName = managerFirstName;
    }

    public get managerLastName(): string {
        return this._managerLastName;
    }

    public set managerLastName(managerLastName: string) {
        this._managerLastName = managerLastName;
    }

    public get managerFirstPhoneNumber(): string {
        return this._managerFirstPhoneNumber;
    }

    public set managerFirstPhoneNumber(managerFirstPhoneNumber: string) {
        this._managerFirstPhoneNumber = managerFirstPhoneNumber;
    }

    public get managerSecondPhoneNumber(): string {
        return this._managerSecondPhoneNumber;
    }

    public set managerSecondPhoneNumber(managerSecondPhoneNumber: string) {
        this._managerSecondPhoneNumber = managerSecondPhoneNumber;
    }

    public get managerEmail(): string {
        return this._managerEmail;
    }

    public set managerEmail(managerEmail: string) {
        this._managerEmail = managerEmail;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get zipCode(): string {
        return this._zipCode;
    }

    public set zipCode(zipCode: string) {
        this._zipCode = zipCode;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

    public get rc(): string {
        return this._rc;
    }

    public set rc(rc: string) {
        this._rc = rc;
    }

    public get taxIdentification(): string {
        return this._taxIdentification;
    }

    public set taxIdentification(taxIdentification: string) {
        this._taxIdentification = taxIdentification;
    }

    public get ice(): string {
        return this._ice;
    }

    public set ice(ice: string) {
        this._ice = ice;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    public get logo(): string {
        return this._logo;
    }

    public set logo(logo: string) {
        this._logo = logo;
    }

    public get webSite(): string {
        return this._webSite;
    }

    public set webSite(webSite: string) {
        this._webSite = webSite;
    }

    public get linkedin(): string {
        return this._linkedin;
    }

    public set linkedin(linkedin: string) {
        this._linkedin = linkedin;
    }

    public get facebook(): string {
        return this._facebook;
    }

    public set facebook(facebook: string) {
        this._facebook = facebook;
    }

    public get twitter(): string {
        return this._twitter;
    }

    public set twitter(twitter: string) {
        this._twitter = twitter;
    }

    public get values(): string {
        return this._values;
    }

    public set values(values: string) {
        this._values = values;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get otherValues(): string[] {
        return this._otherValues;
    }

    public set otherValues(otherValues: string[]) {
        this._otherValues = otherValues;
    }

    public get instagram(): string {
        return this._instagram;
    }

    public set instagram(instagram: string) {
        this._instagram = instagram;
    }

    public get address(): string {
        return this._address;
    }

    public set address(address: string) {
        this._address = address;
    }

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }

    public get activitySector(): string {
        return this._activitySector;
    }

    public set activitySector(activitySector: string) {
        this._activitySector = activitySector;
    }


    public get manager(): string | any {
        return this._manager;
    }

    public set manager(manager: string | any) {
        this._manager = manager;
    }

    public get ObjectToJson(): object {
        return Helper.getObjectValues(this, ['_id', 'name', 'title', 'email', 'zipCode', 'address',
            'country', 'rc', 'taxIdentification', 'ice', 'phoneNumber', 'logo', 'webSite',
            'linkedin', 'facebook', 'twitter', 'values', 'description', 'otherValues', 'managerFirstName',
            'managerLastName', 'managerFirstPhoneNumber', 'managerSecondPhoneNumber', 'managerEmail', 'city', 'instagram',
            'activitySector', 'manager']);
    }
}
