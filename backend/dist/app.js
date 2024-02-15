"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const corsMiddleware_1 = __importDefault(require("./middleware/corsMiddleware"));
const helmetMiddleware_1 = __importDefault(require("./middleware/helmetMiddleware"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
const objectDetectionRoutes_1 = __importDefault(require("./routes/objectDetectionRoutes"));
const app = (0, express_1.default)();
// Configure Middleware
corsMiddleware_1.default.configureCors(app);
helmetMiddleware_1.default.configureHelmet(app);
// Use Routes
app.use('/auth', authRoutes_1.default);
app.use('/file', fileRoutes_1.default);
app.use('/object-detection', objectDetectionRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
