import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const FormSubmit = (props) => {

    const [ username, setUsername ] = useState('')
    const [ product, setProduct ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ description, setDescription ] = useState('')

    const formHandler = (e) => {
        e.preventDefault()
    
        axios.post('http://localhost:5000/api/products',{
            username: username,
            product: product,
            price: price,
            description: description
        })

        .then(() => console.log('Successfully submitted'))
        .then(() => {
            setUsername('')
            setProduct('')
            setPrice(0)
            setDescription('')
        })

        .then(() => props.refresh())
        .catch(err => console.error(err))

}

return (
    <form onSubmit={formHandler}>
        <p>
            <label htmlFor="name">Username:</label>
            <input type="text" name='username' id="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p>
            <label htmlFor="name">Product:</label>
            <input type="text" name='product' id="product" placeholder='Looking For' value={product} onChange={(e) => setProduct(e.target.value)} />
        </p>

        <p>
            <label htmlFor="price">Price:</label>
            <input type="number" step={0.01} id="price" placeholder='$$.$$' value={price} onChange={(e) => setPrice(e.target.value)} />
        </p>
        <label htmlFor="description">Description:</label>
        <p>
            <textarea id="description" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </p>
        <p>
            <input type="submit" id="submitForm" value="Add Product" />
        </p>
    </form>
)
}
