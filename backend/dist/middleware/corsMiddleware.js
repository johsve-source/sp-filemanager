"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/middleware/corsMiddleware.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const configureCors = (app) => {
    app.use(express_1.default.json(), express_1.default.urlencoded({ extended: true }), (0, cors_1.default)({ origin: 'http://yourfrontenddomain.com', credentials: true }));
};
exports.default = {
    configureCors,
};
