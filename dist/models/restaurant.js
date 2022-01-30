"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
    idRest: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    foodType: {
        type: String,
        required: false,
    },
});
exports.default = (0, mongoose_1.model)("restaurant", restaurantSchema);
