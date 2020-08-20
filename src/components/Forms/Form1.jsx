import React, { useState } from 'react'
import useForm from './useForm'

const Form1 = (props) => {


    const { state: form, errors, handleChange, handleCheckbox } = useForm({ email: 'melo', password: '1234' })

    return (
        <form action="">
            <h2>{JSON.stringify(form)}</h2>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Email"
                name="email"
                value={form.email}
            />
            <p>{errors.email}</p>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Contraseá"
                name="password"
                value={form.password}
            />
            <p>{errors.password}</p>
            <input
                type="checkbox"
                onChange={handleCheckbox}
                name="terms"
                value={form.terms}
            />
            <p>{errors.terms}</p>
        </form>
    )
}

export default Form1