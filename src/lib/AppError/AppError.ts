import AppErrorTypes from './AppErrorTypes';

export default class AppError extends Error{

    private _errorType: number;
    private _errorCode: number;

    constructor(message: string, type: AppErrorTypes, code = 500 ){
        super(message);
        
        if( Error.captureStackTrace ){
            Error.captureStackTrace(this,AppError)
        }
        
        this._errorType = AppErrorTypes.GENERIC_ERROR;
        this._errorCode = code;
        
    }

    get errorType(): AppErrorTypes{
        return this._errorType;
    }

    set errorType(val: AppErrorTypes){
        this._errorType = val;
    }

    get errorCode(): number{
        return this._errorCode;
    }

    set errorCode(code: number){
        this._errorCode = code;
    }
}

