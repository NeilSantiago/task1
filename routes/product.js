import express from 'express'
import { createProduct, deleteProduct, disableProduct, getActiveProducts, getInactiveProduct, getProduct, getProducts, getSortedProducts, updateProduct } from '../controllers/product.js'
const router = express.Router()

router.route('/').get(getProducts).post(createProduct)
router.route('/sorted').get(getSortedProducts)
router.route('/active').get(getActiveProducts)
router.route('/inactive').get(getInactiveProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)
router.route('/disable/:id').put(disableProduct)

export default router