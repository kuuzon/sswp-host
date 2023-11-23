// CENTRAL ROUTE FILE
// Import express and router 
const express = require('express'); 
const router = express.Router();

// Import modules
const ProductPolicy = require('../policies/productPolicy');
const FilePolicy = require('../policies/filePolicy');
const VerifyAuth = require('../middleware/verifyAuth');
const fileServerUpload = require('../middleware/fileServerUpload');
const ProductController = require('../controllers/productController');

// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  router.get('/', 
    ProductController.getAllProducts
  );

  // GET onSALE Products
  router.get('/onsale', 
    ProductController.getOnSaleProducts
  );

  // POST Product
  router.post('/', 
    [ProductPolicy.validateProduct,
    FilePolicy.filesPayloadExists,
    FilePolicy.fileSizeLimiter,
    FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
    VerifyAuth.auth,
    fileServerUpload],
    ProductController.postProduct
  );

  // GET BY ID Product
  router.get('/:id',
    ProductController.getProductById
  );

  // UPDATE BY ID Product
  router.put('/:id', 
    [ProductPolicy.validateProduct,
    FilePolicy.filesPayloadExists,
    FilePolicy.fileSizeLimiter,
    FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
    VerifyAuth.auth,
    fileServerUpload],
    ProductController.putProductById
  );

  // DELETE BY ID Product
  router.delete('/:id',
    [VerifyAuth.auth,
    VerifyAuth.admin],
    ProductController.deleteProductById
  );

  return router
}