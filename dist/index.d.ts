export declare type Params = {
    ticker?: string;
    family: string;
    contract?: string;
};
export declare type SharedData = {
    family: string;
    ticker: string;
    title: string;
    regex_address: string;
    regex_extra_id?: string;
    extra_id_title?: string;
    url_block?: string;
    url_address?: string;
    url_tx?: string;
    contract?: string;
};
export interface Coin extends SharedData {
    id: number;
    color?: string;
}
export declare function getAllByFamily(family: string): Coin[];
export declare function getAllCoins(): Coin[];
export declare function findCryptoCurrencyData({ ticker, family, contract }: Params): Coin | null;
export declare function getCryptoCurrencyDataById(id: number): Coin;
export declare function getAllByTicker(ticker: string): Coin[];
export declare function validateCryptoAddress(address: string, params: Params | Coin): boolean | null;
export declare function validateCryptoExtraId(extraId: string, params: Params | Coin): boolean;
