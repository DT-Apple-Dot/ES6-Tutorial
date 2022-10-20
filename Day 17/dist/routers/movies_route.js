"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_controller_1 = require("../controllers/movies_controller");
const router = express_1.default.Router();
router
    .route('/')
    .get(movies_controller_1.getMovie)
    .post(movies_controller_1.createMovie);
router
    .route('/:id')
    .get(movies_controller_1.findMovie)
    .put(movies_controller_1.updateMovie)
    .delete(movies_controller_1.deleteMovie);
exports.default = router;
//# sourceMappingURL=movies_route.js.map