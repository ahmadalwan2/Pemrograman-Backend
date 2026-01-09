const responSukses = (res, code, message, data) => {
    res.status(code).json({message, data});
}

export { responSukses };