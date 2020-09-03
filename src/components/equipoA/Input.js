import React from 'react'
import styles from './form.module.css'
const Input = ({type = 'text', placeholder, name = '', onChange, value, error }) => (
  <>
  <input
    className={`${styles.input} ${error && styles.error}`}
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    value={value}
  />
  {error && <p>{error}</p>}
  </>
)

export default Input