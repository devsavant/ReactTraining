import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import FormDisplay from './FormDisplay'


const FormContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ title: '', body: '', price: 0 })
  const [errors, setErrors] = useState({})
  const history = useHistory();

  useEffect(()=> {
    fetch(`https://backend-panel.herokuapp.com/products/${id ? id : ''}`, { method: 'GET' })
      .then(response => response.json()
      .then(data => {
        if (id) {
          const { title, price, body } = data.result
          setProduct({ title, price, body })
        }
      }))
      .catch(err => {
        alert('Algo falló al consumir la API')
        console.log(err)
      })
  }, [id])

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        if (value.length < 3) {
          setErrors({...errors, title: 'El título debe ser de al menos 3 caracteres'})
        } else {
          setErrors({...errors, title: ''})
        }
        break
      case 'body':
        if (value.length < 3) {
          setErrors({...errors, body: 'La descripción debe ser de al menos 3 caracteres'})
        } else {
          setErrors({...errors, body: ''})
        }
      break
      case 'price':
        if (Number(value) <= 0) {
          setErrors({...errors, price: 'El precio no puede ser negativo' })
        } else {
          setErrors({...errors, price: ''})
        }
      break
      default:
        console.log('WTF')
      break
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    validateField(name, value)
    setProduct({...product, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://backend-panel.herokuapp.com/products/${id ? id : ''}`, {
      method: id ? 'PATCH': 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()
      .then((data) => {
        alert (`Producto ${ id ? 'actualizado' : 'creado' } con éxito \n ID: ${data.result._id}`)
        if (!id) setTimeout(() => history.push(`/equipoA/${data.result._id}`), 3000)
      }))
  }

  return (
    <FormDisplay
      product={product}
      id={id}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  )
}

export default FormContainer