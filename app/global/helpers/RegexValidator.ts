import { AppConfiguration } from "../constants";

export const AppRegex = {
    email: "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$",
    pinCode: `^[0-9]{${AppConfiguration.PIN_CODE_CELL_COUNT}}`,
    numberOnly: '^[0-9]+$',
    alphabetOnly: '^[A-Za-z]+$',
    alphaNumeric: '^[A-Za-z0-9]+$',
    name: '^([a-zA-Z\-\_]+(\ |\')?)+$',
    phone: `^\\+[0-9]+\\${AppConfiguration.PROFILE_PHONE_SPLITTER}[0-9]{3,20}$`,
}

export type TRegex = keyof typeof AppRegex;

export const RegexValidator = {
    validate(text: string, type: TRegex) {
        const regex = AppRegex[type];
        return new RegExp(regex).exec(text) != null;
    },
    checkIsInvalid(text: string, type: TRegex) {
        const regex = AppRegex[type];
        return new RegExp(regex).exec(text.trim()) == null;
    },
 }