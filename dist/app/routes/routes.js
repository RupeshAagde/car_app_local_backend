"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const helmet_1 = __importDefault(require("helmet"));
const routes_data_1 = require("./routes.data");
const response_handler_1 = require("./../utility/response-handler");
const registerMiddlewares = (app) => {
    app.use(helmet_1.default());
    app.use(express_1.json());
    //app.use(verifyToken(['/user/login']));
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
//# sourceMappingURL=routes.js.map