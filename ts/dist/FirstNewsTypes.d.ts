export interface New {
    access?: string;
    data?: Record<string, any>;
    id?: number;
    lastmodified?: string;
    link?: string;
    published?: string;
    status?: string;
    statuscode?: number;
    summary?: string;
    title?: string;
    version?: string;
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
