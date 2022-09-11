"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCryptoCurrencyMeta = void 0;
const lib_1 = require("./lib");
const information_meta_json_1 = __importDefault(require("./information-meta.json"));
const { byFamily, byContracts } = (0, lib_1.prepareList)(information_meta_json_1.default);
function findCryptoCurrencyMeta({ ticker, family, contract }) {
    let key = `${family}${contract === null || contract === void 0 ? void 0 : contract.toLowerCase()}`;
    if (contract && byContracts[key]) {
        return (0, lib_1.prepareInformation)(byContracts[key]);
    }
    if (!ticker)
        return null;
    key = `${ticker}${family}`;
    if (byFamily[key]) {
        return (0, lib_1.prepareInformation)(byFamily[key]);
    }
    return null;
}
exports.findCryptoCurrencyMeta = findCryptoCurrencyMeta;
