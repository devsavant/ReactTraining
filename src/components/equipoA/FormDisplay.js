import React from 'react'

const FormDisplay = ({ product, id, handleChange, handleSubmit, errors }) => (
  <>
    <input type="text" placeholder="Titulo" name="title" onChange={handleChange} value={product.title} />
    <p style={{color: 'red'}}>{errors.title}</p>
    <input type="text" placeholder="Descripción" name="body" onChange={handleChange} value={product.body} />
    <p style={{color: 'red'}}>{errors.body}</p>
    <input type="number" placeholder="Precio" name="price" onChange={handleChange} value={product.price} />
    <p style={{color: 'red'}}>{errors.price}</p>
    <button onClick={handleSubmit}>{id ? 'Actualizar' : 'Crear'}</button>
  </>
)

export default FormDisplay