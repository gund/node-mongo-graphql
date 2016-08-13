/**
 * Created by alex on 8/13/2016.
 */

import mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

export default mongoose.model('User', userSchema);
