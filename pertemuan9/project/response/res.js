const success = (res, code, message, data,) => {
    res.status(code).json({status: "success", message, data});
}

const failed = (res, code, message, data,) => {
    res.status(code).json({status: "error", message, data});
}

export { success, failed };