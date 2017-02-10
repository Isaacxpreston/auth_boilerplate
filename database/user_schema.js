const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  phone: {type: String, required: true}
});

userSchema.methods.generateHash = phone => bcrypt.hashSync(phone, bcrypt.genSaltSync(8), null);

userSchema.methods.comparePassword = function (phone) {
  return bcrypt.compareSync(phone, this.phone);
};

const User = mongoose.model('User', userSchema);

module.exports = User