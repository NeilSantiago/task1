import mongoose, {Schema} from 'mongoose'

const wareHouseSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    dateEstablished: {
        type: Date,
        required: true,
    },
})

export default mongoose.model('Warehouse', wareHouseSchema)