/**
 * ==== Urutan response =====
 * res
 * code
 * message
 * data
 */

const responseSuccess = (res, code, status, message, data) => {
    res.status(code).json ({
        status,
        message,
        data,
    });
};

const responseError = (res, code, status, message, data) => {
    res.status(code).json ({
        status,
        message,
        data,
    });
};

export { responseSuccess, responseError };