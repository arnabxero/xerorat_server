import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true,
});

const UserModel = mongoose.models.UserModel || mongoose.model('UserModel', UserSchema);

export default UserModel;
