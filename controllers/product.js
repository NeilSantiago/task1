import ProductDb from '../models/Product.js'
const createProduct = async (req,res) => {
    try{
        const products = new ProductDb(req.body
        )
        await products.save()
        res.status(200).json(req.body)
        }catch(e){
            res.status(500).send(e)
        }
}

const getProducts = async (req,res) => {
    try{
    const products = await ProductDb.find()
    res.status(200).json(products)
    }catch(e){
        res.status(500).send(e)
    }
}

const getProduct = async (req,res) => {
    let productId = req.params.id
    try{
        const product = await ProductDb.find({_id: productId})
        res.status(200).json(product)
        }catch(e){
            res.status(500).send(e)
        }
}

const getSortedProducts = async (req,res) => {
    try{
        const products = await ProductDb.find().sort({dateManufactured: -1})
        res.status(200).json(products)
        }catch(e){
            res.status(500).send(e)
        }
}

const updateProduct = async (req,res) => {
    let productId = req.params.id
    try{
        await ProductDb.findByIdAndUpdate({_id: productId}, req.body)
        const updatedProduct = await ProductDb.findOne({_id:productId})
        res.status(200).json(updatedProduct)
        }catch(e){
            res.status(500).send(e)
        }
}

const disableProduct = async (req,res) => {
    let productId = req.params.id
    try{
        await ProductDb.findOneAndUpdate({_id: productId}, {active: false})
        const updatedProduct = await ProductDb.findOne({_id:productId})
        res.status(200).json(updatedProduct)
        }catch(e){
            res.status(500).send(e)
        }
}

const getActiveProducts = async (req,res) => {
    try{
        const product = await ProductDb.find({active:true})
        res.status(200).json(product)
        }catch(e){
            res.status(500).send(e)
        }
}

const getInactiveProduct = async (req,res) => {
    try{
        const product = await ProductDb.find({active:false})
        res.status(200).json(product)
        }catch(e){
            res.status(500).send(e)
        }
}

const deleteProduct = async (req,res) => {
    let productId = req.params.id
    try{
        await ProductDb.findOneAndDelete({_id: productId})
        res.status(200).send(`deleted product ${productId}`)
        }catch(e){
            res.status(500).send(e)
        }
}

export {getProducts, getProduct, createProduct, getActiveProducts, getInactiveProduct, updateProduct, deleteProduct, getSortedProducts, disableProduct}