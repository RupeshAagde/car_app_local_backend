"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const response_handler_1 = require("./response-handler");
const validate = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(403)
            .send(new response_handler_1.ResponseHandler(null, { message: 'BAD REQUEST' }));
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map