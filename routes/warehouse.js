import express from 'express'
import { createWarehouse, deleteWarehouse, getWarehouseProducts, getWarehouses, updateWarehouse } from '../controllers/warehouse.js'
const router = express.Router()

router.route('/').get(getWarehouses).post(createWarehouse)
router.route('/:id').get(getWarehouseProducts).put(updateWarehouse).delete(deleteWarehouse)

export default router