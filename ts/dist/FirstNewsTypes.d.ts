export interface New {
    channels?: any[];
    content?: string;
    id?: number;
    link?: string;
    published?: string;
    summary?: string;
    title?: string;
}
export interface NewLoadMatch {
    id: number;
}
export interface NewListMatch {
    after?: string;
    before?: string;
    channel?: string;
    limit?: number;
    link?: string;
    offset?: number;
    pretty?: boolean;
    q?: string;
}
