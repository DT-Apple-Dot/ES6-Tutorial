"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const body_parser_1 = __importDefault(require("body-parser"));
const movies_route_1 = __importDefault(require("./routers/movies_route"));
const user_route_1 = __importDefault(require("./routers/user_route"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, multer_1.default)().array('Nar Nar'));
mongoose_1.default
    .connect(process.env.DATABASE || "")
    .then(() => {
    app.listen(PORT, () => console.log(`Sever is running in ${PORT}`));
    app.use('/movies', movies_route_1.default);
    app.use('/user', user_route_1.default);
});
//# sourceMappingURL=app.js.map