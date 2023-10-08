import mongoose from 'mongoose';

const RATSchema = new mongoose.Schema({
    formData: JSON,
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const RATModel = mongoose.models.RATModel || mongoose.model('RATModel', RATSchema);

export default RATModel;
