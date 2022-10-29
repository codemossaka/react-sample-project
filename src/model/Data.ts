import exp from "constants";

export class Data {
    id: number;
    date: string;
    name: string;
    archive: boolean;
    active: boolean;
    sort: number;

    constructor(id: number, date: string, name: string, archive: boolean, active: boolean, sort: number) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.archive = archive;
        this.active = active;
        this.sort = sort;
    }
}