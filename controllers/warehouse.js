import WarehouseDb from '../models/Warehouse.js'
import ProductDb from '../models/Product.js'

const createWarehouse = async (req,res) => {
    try{
    const newWarehouse = new WarehouseDb(req.body)
    await newWarehouse.save()
    res.status(200).json(newWarehouse)
    }catch(e){
        res.status(500).send(e)
    }
}
const getWarehouses = async (req,res) => {
    try{
        const warehouses = await WarehouseDb.find()
        res.status(200).json(warehouses)
        }catch(e){
            res.status(500).send(e)
        }
}
const updateWarehouse = async (req,res) => {
    let warehouseId = req.params.id
    try{
        await WarehouseDb.findOneAndUpdate({_id: warehouseId}, req.body)
        const warehouse = await WarehouseDb.find({_id: warehouseId})
        res.status(200).json(warehouse)
        }catch(e){
            res.status(500).send(e)
        }
}
const getWarehouseProducts = async (req,res) => {
    let warehouseId = req.params.id
    try{
        const warehouseProducts = await ProductDb.find({warehouseId: warehouseId})
        res.status(200).json(warehouseProducts)
        }catch(e){
            res.status(500).send(e)
        }
}
const deleteWarehouse = async (req,res) => {
    let warehouseId = req.params.id
    try{
        await WarehouseDb.findOneAndDelete(warehouseId)
        res.status(200).json(`Successfully deleted warehouse ${warehouseId}`)
        }catch(e){
            res.status(500).send(e)
        }
}

export {getWarehouseProducts,getWarehouses,createWarehouse,updateWarehouse,deleteWarehouse}