import { AxiosRequestConfig, AxiosResponse } from "axios";
import { TAPI } from "../network";

export interface TApiResponse<T = unknown, D = any> extends AxiosResponse<T, D> { }

export interface TApiError<T = any> {
    config: AxiosRequestConfig;
    title: string;
    message: string;
    code?: string;
    isNetworkError: boolean;
    response: TApiResponse<T>;
    api: TAPI;
    retryAction?: () => void;
}

export interface BaseStorable {

}

export type RemoteConfigKeys = 'is_maintenance_active_dev' | 'is_maintenance_active_prod';

export interface iRemoteConfig {
    is_maintenance_active_dev: string;
    is_maintenance_active_prod: string;
}

export interface TContact {
    name: string;
    phone?: string;
    email?: string
}