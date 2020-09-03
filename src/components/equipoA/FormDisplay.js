import React from 'react'
import Input from './Input'
import styles from './form.module.css'

const FormDisplay = ({ product, id, handleChange, handleSubmit, errors }) => (
  <>
    <section className={styles.container}>
      <Input placeholder='Título' name='title' onChange={handleChange} value={product.title} error={errors.title} />
      <Input placeholder='Descripción' name='body' onChange={handleChange} value={product.body} error={errors.body} />
      <Input placeholder='Precio' name='price' onChange={handleChange} value={product.price} error={errors.price} />
      <button className={styles.button} onClick={handleSubmit}>{id ? 'Actualizar' : 'Crear'}</button>
    </section>
  </>
)

export default FormDisplay