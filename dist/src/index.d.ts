declare type Coin = {
    network: string;
    ticker: string;
    title?: string;
    regex_address?: string;
    regex_extra_id?: string;
    extra_id_title?: string;
    url_block?: string;
    url_address?: string;
    is_token: boolean;
    launch_data?: string;
    description?: string;
    web_site?: string;
    decimals_main: number;
    decimals_display?: number;
    smart_contract?: string;
    max_supply?: number;
    proof_type?: string;
    algorithm?: string;
    color?: string;
};
export declare function getCryptoCurrencyData({ ticker, network, contract }: {
    ticker?: string;
    network?: string;
    contract?: string;
}): Coin;
export {};
