import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: [true, 'Please provide a username'],
    unique: true
  },
  email: {
    type: 'string',
    required: [true, 'Please provide a email'],
    unique: true
  },
  password: {
    type: 'string',
    required: [true, 'Please provide a password']
  },
  isVerified: {
    type: 'boolean',
    default: false
  },
  isAdmin: {
    type: 'boolean',
    default: false
  },
  forgotPasswordToken: {
    type: 'string'
  },
  forgotPasswordTokenExpiry: {
    type: 'date'
  },
  verifyToken: {
    type: 'string'
  },
  verifyTokenExpiry: {
    type: 'date'
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;