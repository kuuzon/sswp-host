import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Form, InputGroup, Row, Col, Spinner } from "react-bootstrap"

import productService from "../../services/productService"
import { getFileFromUrl } from '../../utils/writeUtils'
import TuCard from "../../components/common/TuCard"
import TuButton from "../../components/common/TuButton"
import TuLoader from "../../components/common/TuLoader"

function EditProduct() {
  // CUSTOM HOOKS
  const params = useParams();
  const navigate = useNavigate();

  // STATE INIT
  const [productData, setProductData] = useState({
    id: params.id,
    name: "",
    description: "",
    category: "",
    price: 0,
    sizes: "",
    texture: "",
    onSale: false,
    isAvailable: true,
    image: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Uploaded File from Existing downloadURL
  const [uploadedFile, setUploadedFile] = useState("");
  const [preview, setPreview] = useState(true);

  // Destructure data state nested object properties & instance of useNavigate class
  const { id, name, description, category, price, sizes, texture, onSale, isAvailable, image } = productData;

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        effectRan.current = true;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); 

  // FORM FUNCTIONS
  // [0] FORM PRE-POPULATION CALL
  async function fetchProduct() {
    try {
      // (i) API FETCH CALL
      const response = await productService.getById(id);
      const dbProduct = await response.data;
      console.log(dbProduct);

      // (ii) UPDATING STATE DATA OBJECT
      setProductData(productData => ({ ...productData, ...dbProduct }));

      // Save uploaded file glob to state
      if (!dbProduct.image) {      
        console.log('No downloadURL provided by DB'); 
      } else {
        const fileGlob = getFileFromUrl(dbProduct.image);
        setUploadedFile(fileGlob);
      }

    // (iii) CLEANUP FUNCTIONS
    } catch(err) {
      console.log(err?.response);
      setError(true); 
    }
  }

  // [1] CHANGE STATE FOR TEXT FORM DATA
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  }

  // [2] CHANGE STATE FOR FILE FORM DATA
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
    setPreview(false);
  }  

  // [3] FORM SUBMISSION FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();      
    setLoading(true);
    try {
      // NOTE: We add uploadedFile parameter to pass image glob
      const response = await productService.put(id, productData, uploadedFile);
      console.log(response);
      navigate('/store/products');

    } catch (err) {
      console.log(err?.response);
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
      setTimeout(() => {setLoading(false)}, 1000);
    }
  };

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center">
        <p>Error page</p>
      </Container>
    )
  }

  // CONDITIONAL LOAD: LOADING
  if (loading && effectRan.current === false) {
    return (
      <Container>
        <TuLoader />
      </Container>
    )
  }

  return (
    <TuCard title="Edit Product">
      <Form onSubmit={ handleSubmit }>
        {/* GROUP 1: NAME */}
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter product name" 
            name="name"
            value={name}
            onChange={ handleTextChange }
          />
        </Form.Group>

        {/* GROUP 2: DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label>Product description</Form.Label>
          <Form.Control type="text" as='textarea' placeholder="Enter product description" name="description" value={description} onChange={ handleTextChange } />
        </Form.Group>

        {/* GROUP 3: CATEGORY */}
        <Form.Group className="mb-3">
          <Form.Label>Product category</Form.Label>
          <Form.Control 
            as='select'
            name='category'
            value={category}
            onChange={ handleTextChange }
          >
            <option value="">Choose product category</option>
            <option value="kits">Kits</option>
            <option value="training">Training</option>
            <option value="apparel">Apparel</option>
          </Form.Control>
        </Form.Group>

        {/* GROUP 4: PRODUCT DETAILS */}
        <Form.Group className="mb-3">
          <Row>
            {/* 4A: PRICE */}
            <Col lg={4} md={4} sm={12}>
              <Form.Label>Product price</Form.Label>
              <InputGroup>          
                <InputGroup.Text id="price-dollar">$</InputGroup.Text>
                <Form.Control type="number" aria-describedby="price-dollar" id="price-input" name="price" placeholder="0" value={price} onChange={ handleTextChange } />
              </InputGroup>
            </Col>

            {/* 4B: SIZES */}
            <Col lg={4} md={4} sm={12}>
              <Form.Label>Product sizing range</Form.Label>
              <Form.Control 
                as='select'
                name='sizes'
                value={sizes}
                onChange={ handleTextChange }
              >
                <option value="">Choose sizing range</option>
                <option value="range">XS to XL</option>
                <option value="single">One Size Fits All</option>
              </Form.Control>
            </Col>

            {/* 4C: TEXTURE */}
            <Col lg={4} md={4} sm={12}>
              <Form.Label>Product texture</Form.Label>
              <Form.Control type="text" placeholder="Enter product texture" name="texture" value={texture} onChange={ handleTextChange } />
            </Col>
          {/* END OF PRODUCT DETAILS ROW */}
          </Row>
        </Form.Group>

        {/* GROUP 5: PRODUCT SALE DETAILS */}
        <Form.Group className="mb-3">
          <Row>
            {/* 5A: ON SALE */}
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Product sale status</Form.Label>
              <Form.Control 
                as='select'
                name='onSale'
                value={onSale}
                onChange={ handleTextChange }
              >
                <option value={false}>Standard</option>
                <option value={true}>On Sale</option>
              </Form.Control>
            </Col>

            {/* 5B: IS AVAILABLE */}
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Product availability</Form.Label>
              <Form.Control 
                as='select'
                name='isAvailable'
                value={isAvailable}
                onChange={ handleTextChange }
              >
                <option value={true}>In Stock</option>
                <option value={false}>Out of Stock</option>
              </Form.Control>
            </Col>
          {/* END OF PRODUCT SALE DETAILS ROW */}
          </Row>
        </Form.Group>

        {/* GROUP 6A: CONDITIONAL PREVIEW OF IMAGE (File in DB) */}
        { preview && !loading ? <div>
          <h6>Current Image</h6>
          <img style={{ width: "20%", margin: "1rem auto", opacity: 0.7 }} src={image} alt="preview"/>
        </div> : null }

        {/* GROUP 6: PRODUCT IMAGE */}
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Product image</Form.Label>
          <Form.Control 
            type="file"
            className="mb-4"
            onChange={ handleFileChange }
          />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <TuButton loadingState={loading}>
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'Submit'}
        </TuButton>
      </Form>
    </TuCard>
  )
}

export default EditProduct