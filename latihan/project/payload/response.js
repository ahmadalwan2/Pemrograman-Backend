const resSuccess = (res, code, status, message, data)  => {
        return res.status(code).json({status, message, data})
};

const resFailed = (res, code, status, message, data) => {
        return res.status(code).json({status, message, data})
};

export { resSuccess, resFailed };