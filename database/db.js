import mongoose from 'mongoose'

const connectDb = async (url) => {
    try{
    mongoose.set('strictQuery', false)
    const connection = await mongoose.connect(url)
    console.log(`DB connected`)
    return connection;
    }catch(e){
        console.log(e)
    }
}

export {connectDb}