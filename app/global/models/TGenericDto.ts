export interface TGenericListResponse<T> {
    pager: TPager;
    list: T[];
}

export interface TPager {
    currentPageIndex: number,
    pageSize: number,
    totalRecordCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
    pageCount: number
}

export interface TGenericResponse {

}

export interface TErrorResponse {
    code: string;
    message: string;
    errors?: [string: [string]];
}