export declare type Params = {
    ticker?: string;
    network: string;
    contract?: string;
};
export declare type SharedData = {
    network: string;
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
    decimals: number;
    decimals_display?: number;
    color?: string;
}
export declare function getAllByNetwork(network: string): Coin[];
export declare function getAllCoins(): Coin[];
export declare function findCryptoCurrencyData({ ticker, network, contract }: Params): Coin | null;
export declare function getCryptoCurrencyDataById(id: number): Coin;
export declare function getAllByTicker(ticker: string): Coin[];
export declare function validateCryptoAddress(address: string, params: Params | Coin): boolean | null;
export declare function validateCryptoExtraId(extraId: string, params: Params | Coin): boolean;
