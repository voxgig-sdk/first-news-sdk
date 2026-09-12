import { FirstNewsEntityBase } from '../FirstNewsEntityBase';
import type { FirstNewsSDK } from '../FirstNewsSDK';
import type { Control } from '../types';
import type { New, NewLoadMatch, NewListMatch } from '../FirstNewsTypes';
declare class NewEntity extends FirstNewsEntityBase<New> {
    constructor(client: FirstNewsSDK, entopts: any);
    make(this: NewEntity): NewEntity;
    load(this: any, reqmatch?: NewLoadMatch, ctrl?: Control): Promise<NewEntity>;
    list(this: any, reqmatch?: NewListMatch, ctrl?: Control): Promise<NewEntity[]>;
}
export { NewEntity };
