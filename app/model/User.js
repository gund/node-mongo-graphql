/**
 * Created by alex on 8/13/2016.
 */
"use strict";
var mongoose = require('mongoose');
exports.userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', exports.userSchema);
//# sourceMappingURL=User.js.map