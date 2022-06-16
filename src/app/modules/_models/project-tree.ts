export interface QldaNote {
    id: number,
    name: string;
    children?: QldaNote[];
}


/** Flat node with expandable and level information */
export interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
    id: number;
}
