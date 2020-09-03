import { useState } from 'react';
const axios = require('axios');

const HandleForm = (productoId) => {
  
  const [producto, setProductos] = useState({});
  const [errors, setErrors] = useState({});
  
  const getProductsById = async () => {
    try {
      const response = await axios.get(`https://backend-panel.herokuapp.com/products/${productoId}`);
      const { title, body, price } = response.data.result;
      setProductos({title, body, price});
    } catch (error) {
      console.error(error);
    }
  };
  
  const createProduct = async () => {
    try {
        await axios.post(`https://backend-panel.herokuapp.com/products`,
        {
          title: producto.title,
          body:  producto.body,
          price: producto.price
        });
    } catch (error) {
      console.error(error);
    }
  };
  
  const updateProduct = async () => {
    try {
        await axios.patch(`https://backend-panel.herokuapp.com/products/${productoId}`,
        {
          title: producto.title,
          body:  producto.body,
          price: producto.price
        });
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubmit = async () => {
    validateForm();
    if(!Object.keys(errors).length && Object.keys(producto).length >= 3) {
      if(productoId) {
       await updateProduct();
      }else{
       await createProduct();
      }
    }
  };
  
  const validateForm = () => {
    let errs = {};
    if(!producto.title) {
      errs.title = "Este campo es obligatorio"
    }
    else if(!producto.title.length) {
      errs.title = "Este campo es obligatorio"
    }
    else if(!producto.body){
      errs.body = "Este campo es obligatorio"
    }
    else if(!producto.body.length){
      errs.body = "Este campo es obligatorio"
    }
    else if(!producto.price){
      errs.price = "Este campo es obligatorio"
    }
    else if(producto.price < 0){
      errs.price = "Este campo es obligatorio"
    }
    setErrors(errs)
  };
  
  const handleChange = (event) => {
    setProductos({...producto, [event.target.name]:event.target.value})
  };
  
  return { producto, handleSubmit, getProductsById, handleChange, errors }
  
}

export default HandleForm;
