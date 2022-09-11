import { Params, SharedData } from './index';
export interface Meta extends SharedData {
    desc?: string;
    launch_data?: string;
    description?: string;
    web_site?: string;
    max_supply?: number;
    proof_type?: string;
    algorithm?: string;
}
export declare function findCryptoCurrencyMeta({ ticker, family, contract }: Params): Meta | null;
