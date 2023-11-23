import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get('/api/products');
}
// GET ALL ONSALE - ProductSale

// POST - AddProduct
function post(data) {
  const formData = prepareFormData(data);
  return api.post(
    '/api/products', 
    formData, 
    formConfig
  );
}
// GET BY ID - ProductDetail
function getById(id) {
  return api.get('/api/products/' + id);
}
// PUT - EditProduct
function put(id, data, uploadedfile) {
  const formData = prepareFormData(data, uploadedfile);
  return api.put(
    '/api/products/' + id, 
    formData, 
    formConfig
  );
}
// DELETE - ProductDetail
function del(id) {
  return api.delete('/api/products/' + id);
}

// REFACTORED VARIABLES/FUNCTIONS: Repeated code better abstracted to keep source code DRY (called above)
// [1] Form Config: sets the content header to form data
const formConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

// [2] Form Data: format of mixed data when uploading files
function prepareFormData(data, uploadedfile){
  // New instance of class
  let formData = new FormData();

  // Append reconfigured mixed data to new object
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('category', data.category);
  formData.append('price', data.price);
  formData.append('sizes', data.sizes);
  formData.append('texture', data.texture);
  formData.append('onSale', data.onSale);
  formData.append('isAvailable', data.isAvailable);
  formData.append('image', data.image);
  if (uploadedfile) {
    formData.append('uploadedFile', uploadedfile);
  }
  
  // Return restructured form data (for our API)
  return formData;
}

const productService = {
  getAll,
  post,
  getById,
  put,
  del
}

export default productService;