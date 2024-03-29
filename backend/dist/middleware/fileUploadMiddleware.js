"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/middleware/fileUploadMiddleware.ts
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const fileUploadMiddleware = upload.single('file');
exports.default = fileUploadMiddleware;
