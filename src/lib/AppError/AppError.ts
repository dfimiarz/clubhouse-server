import AppErrorTypes from './AppErrorTypes';

export default class AppError extends Error{

    //Specif error type
    private _errorType: AppErrorTypes;
    
    //HTTP error code to pass to the front end
    private _httpErrorCode: number;

    constructor(message: string, type: AppErrorTypes = AppErrorTypes.GENERIC_ERROR, code = 500 ){
        super(message);
        
        if( Error.captureStackTrace ){
            Error.captureStackTrace(this,AppError)
        }
        
        this._errorType = type;
        this._httpErrorCode = code;
        
    }

    get errorType(): AppErrorTypes{
        return this._errorType;
    }

    set errorType(val: AppErrorTypes){
        this._errorType = val;
    }

    get httpErrorCode(): number{
        return this._httpErrorCode;
    }

    set httpErrorCode(code: number){
        this._httpErrorCode = code;
    }
}

