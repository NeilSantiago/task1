import mongoose, {Schema} from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    dateArrived: {
        type: Date,
        required: true,
    },
    dateManufactured:{
        type: Date,
        required: true,
    },
    expirationDate:{
        type: Date,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
    },
    warehouseId:{
        type: String,
        required: true,
    }

})

export default mongoose.model('Product', productSchema)