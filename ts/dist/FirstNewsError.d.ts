import { Context } from './Context';
declare class FirstNewsError extends Error {
    isFirstNewsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FirstNewsError };
