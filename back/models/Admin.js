import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hashing password before saving
adminSchema.pre('save', function (next) {
  const admin = this;
  if (!admin.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      admin.password = hash;
      next();
    });
  });
});

// Method to compare password
adminSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
