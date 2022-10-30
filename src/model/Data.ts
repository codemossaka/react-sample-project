import exp from "constants";

export class Data {
    id: number | undefined;
    date: string | undefined;
    name: string | undefined;
    archive: boolean | undefined;
    active: boolean | undefined;
    sort: number | undefined;

    constructor(id?: number, date?: string, name?: string, archive?: boolean, active?: boolean, sort?: number) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.archive = archive;
        this.active = active;
        this.sort = sort;
    }
}