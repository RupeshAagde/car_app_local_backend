"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const response_handler_1 = require("./response-handler");
const verifyToken = (excludedPaths) => (req, res, next) => {
    try {
        if (excludedPaths.includes(req.path)) {
            return next();
        }
        const token = req.headers.authorization;
        if (!token) {
            return res.send(new response_handler_1.ResponseHandler(null, { message: 'UNAUTHORIZED' }));
        }
        jsonwebtoken_1.verify(token, process.env.SECRET_KEY || '');
        next();
    }
    catch (e) {
        return res.send(new response_handler_1.ResponseHandler(null, { message: 'UNAUTHORIZED' }));
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verify-token.js.map