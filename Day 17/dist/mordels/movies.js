"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("movies", movieSchema);
//# sourceMappingURL=movies.js.map