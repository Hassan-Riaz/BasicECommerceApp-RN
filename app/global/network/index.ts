import { AxiosRequestHeaders, Method } from "axios";
import { CURRENT_ENVIRONMENT } from "../common";

type TToken = 'APP_ACCESS_TOKEN' | 'USER_ACCESS_TOKEN' | null;

type GenerateApiParams = {
    method: TRequestMethod;
    url: string;
    headers?: THTTPHeaders;
    params?: {};
    domain?: string;
    ignoreResponseLogs?: boolean
}

export function generateApiObject(api: GenerateApiParams): TAPI {
    api.domain = api.domain || CURRENT_ENVIRONMENT.API_URL;
    api.headers = api.headers != null ? api.headers : {
        'Content-Type': 'application/json'
    };
    return new API(api.method, api.url, api.headers ? api.headers : {
        'Content-Type': 'application/json'
    }, api.domain || CURRENT_ENVIRONMENT.DOMAIN_URL, api.params, api.ignoreResponseLogs);
}

type TRequestMethod = Method;

interface THTTPHeaders  {

}

export interface TAPI {
    method: TRequestMethod;
    headers: THTTPHeaders;
    params: {};
    getUrl: () => string;
    ignoreResponseLogs?: boolean
}

class API implements TAPI {
    method
    url
    headers
    domain
    params
    ignoreResponseLogs
    constructor(method: TRequestMethod, url: string, headers: THTTPHeaders, domain: string, params: {} = {}, ignoreResponseLogs?: boolean) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.domain = domain;
        this.params = params
        this.ignoreResponseLogs = ignoreResponseLogs;
    }

    getUrl() {
        return this.domain + this.url
    }
}