/*
    Contains values used to distinguish between various AppError types
*/
enum AppErrorTypes{
    
    //Generic (default) app error type
    GENERIC_ERROR = 100,

    //Route error type
    ROUTE_ERROR = 200,

    //Generic database error
    DB_GENERIC_ERROR = 400,

    //Database connection error
    DB_CONNECT_FAILED = 401
}

export default AppErrorTypes;