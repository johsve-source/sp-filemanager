"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/fileRoutes.ts
const express_1 = require("express");
const fileUploadMiddleware_1 = __importDefault(require("../middleware/fileUploadMiddleware"));
const router = (0, express_1.Router)();
router.post('/upload', fileUploadMiddleware_1.default, (req, res, next) => {
    // Your route logic here
});
exports.default = router;
