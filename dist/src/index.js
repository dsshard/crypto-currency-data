"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoCoinDecimals = exports.validateCryptoExtraId = exports.validateCryptoAddress = exports.getCryptoCurrencyDataById = exports.findCryptoCurrencyData = void 0;
const result_json_1 = __importDefault(require("./result.json"));
const lib_1 = require("./lib");
const byContracts = {};
const byNetworks = {};
const byIds = {};
for (const coin of result_json_1.default) {
    byIds[coin.id] = coin;
    if (coin.smart_contract) {
        const key = `${coin.network}${coin.smart_contract.toLowerCase()}`;
        byContracts[key] = coin;
    }
    else {
        const key = `${coin.ticker}${coin.network}`;
        byNetworks[key] = coin;
    }
}
function findCryptoCurrencyData({ ticker, network, contract }) {
    let key = `${network}${contract === null || contract === void 0 ? void 0 : contract.toLowerCase()}`;
    if (contract && byContracts[key]) {
        return (0, lib_1.prepareInformation)(byContracts[key]);
    }
    if (!ticker)
        return null;
    key = `${ticker}${network}`;
    return (0, lib_1.prepareInformation)(byNetworks[key]);
}
exports.findCryptoCurrencyData = findCryptoCurrencyData;
function getCryptoCurrencyDataById(id) {
    return byIds[id] || null;
}
exports.getCryptoCurrencyDataById = getCryptoCurrencyDataById;
function validateCryptoAddress(address, params) {
    if (!params)
        return null;
    if (typeof (params === null || params === void 0 ? void 0 : params.regex_address) !== 'undefined') {
        const reg = new RegExp(params.regex_address);
        return reg.test(address);
    }
    const coin = findCryptoCurrencyData(params);
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
    if (!params)
        return null;
    if (typeof (params === null || params === void 0 ? void 0 : params.regex_extra_id) !== 'undefined') {
        const reg = new RegExp(params.regex_extra_id);
        return reg.test(extraId);
    }
    const coin = findCryptoCurrencyData(params);
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
    if (typeof (params === null || params === void 0 ? void 0 : params.decimals_main) !== 'undefined') {
        return params.decimals_main;
    }
    const coin = findCryptoCurrencyData(params);
    return coin.decimals_main;
}
exports.getCryptoCoinDecimals = getCryptoCoinDecimals;
