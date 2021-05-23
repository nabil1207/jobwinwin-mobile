export class File {

    private id: string;
    private _name: string;
    private _path: string;
    private _type: string;
    private _size: number

    constructor(file?) {
        this.id = file.id;
        this.name = file.name;
        this.path = file.path;
        this.type = file.type;
        this.size = file.size;
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

    public get path(): string {
        return this._path;
    }

    public set path(path: string) {
        this._path = path;
    }

    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get size(): number {
        return this._size;
    }

    public set size(size: number) {
        this._size = size;
    }

}