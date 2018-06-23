import AppError from './AppError';

export default function( err: Error | AppError): err is AppError{
    return (<AppError>err).errorType !== undefined;
}