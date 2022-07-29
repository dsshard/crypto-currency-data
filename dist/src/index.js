"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoCoinDecimals = exports.validateCryptoExtraId = exports.validateCryptoAddress = exports.getCryptoCurrencyData = void 0;
const result_json_1 = __importDefault(require("./result.json"));
const lib_1 = require("./lib");
const byContracts = {};
const byNetworks = {};
for (const coin of result_json_1.default) {
    if (coin.smart_contract) {
        const key = `${coin.network}${coin.smart_contract.toLowerCase()}`;
        byContracts[key] = coin;
    }
    else {
        const key = `${coin.ticker}${coin.network}`;
        byNetworks[key] = coin;
    }
}
function getCryptoCurrencyData({ ticker, network, contract }) {
    if (contract && byContracts[contract.toLowerCase()]) {
        const key = `${network}${contract.toLowerCase()}`;
        return (0, lib_1.prepareInformation)(byContracts[key]);
    }
    const key = `${ticker}${network}`;
    return (0, lib_1.prepareInformation)(byNetworks[key]);
}
exports.getCryptoCurrencyData = getCryptoCurrencyData;
function validateCryptoAddress(address, params) {
    const coin = getCryptoCurrencyData(params);
    if (coin) {
        if (!coin.regex_extra_id)
            return null;
        const reg = new RegExp(coin.regex_address);
        return reg.test(address);
    }
    return null;
}
exports.validateCryptoAddress = validateCryptoAddress;
function validateCryptoExtraId(extraId, params) {
    const coin = getCryptoCurrencyData(params);
    if (coin) {
        if (!coin.regex_extra_id)
            return null;
        const reg = new RegExp(coin.regex_extra_id);
        return reg.test(extraId);
    }
    return null;
}
exports.validateCryptoExtraId = validateCryptoExtraId;
function getCryptoCoinDecimals(params) {
    const coin = getCryptoCurrencyData(params);
    return coin.decimals_main;
}
exports.getCryptoCoinDecimals = getCryptoCoinDecimals;
