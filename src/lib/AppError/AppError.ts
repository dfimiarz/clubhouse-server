import AppErrorTypes from './AppErrorTypes';

export default class AppError extends Error{

    private _errorType: number;

    constructor(message: string, type: AppErrorTypes){
        super(message);
        this._errorType = AppErrorTypes.GENERIC_ERROR;
    }

    get errorType(): AppErrorTypes{
        return this._errorType;
    }

    set errorType(val: AppErrorTypes){
        this._errorType = val;
    }
}

