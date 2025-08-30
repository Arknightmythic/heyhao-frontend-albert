export interface BaseResponse<T>{
    success:boolean,
    message:string,
    detail:T
}