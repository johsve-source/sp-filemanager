"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/objectDetectionRoutes.ts
const express_1 = __importDefault(require("express"));
const objectDetectionController_1 = __importDefault(require("../controllers/objectDetectionController"));
const router = express_1.default.Router();
router.post('/detect-objects', objectDetectionController_1.default.detectObjects);
exports.default = router;
