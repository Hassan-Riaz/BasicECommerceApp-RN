import { TApiError } from "../../global/helpers/constraints"

export interface TErrorView {
    onRetryPressed?: () => void
    error: TApiError;
}