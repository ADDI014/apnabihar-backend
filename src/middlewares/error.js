

const ApiError = require("../utils/ApiError");

const errorHandler = (err, req,res, next) => {
    const status = err instanceof ApiError ? err.statusCode : 500;

    res.status(status).json({
        success : false,
        message : err.message || "Internal Server Error",
    });
};


module.exports = errorHandler;