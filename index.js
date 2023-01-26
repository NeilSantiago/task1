import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { connectDb } from './database/db.js'
import ProductRoute from './routes/product.js'
import WarehouseRoute from './routes/warehouse.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use('/product', ProductRoute)
app.use('/warehouse', WarehouseRoute)

const port = process.env.PORT || 3000
const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`)
        })
        }catch(e){
            console.log(e)
        }
}
start()