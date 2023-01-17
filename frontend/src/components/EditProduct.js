import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const EditProduct = () => {

    const { id } = useParams()
    const nav = useNavigate()

    const [username, setUsername] = useState('')
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                setUsername(response.data.username)
                setProduct(response.data.product)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
    }, [])

    const formHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:5000/api/products/${id}`, {
            username,
            product,
            price,
            description
        })
            .then(() =>
                nav('/')
            )
    }
    return (
        <form onSubmit={formHandler}>
            <h1> Edit Product </h1>
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
                <input type="submit" id="submitForm" value="Edit Product" />
            </p>
        </form>
    )
    }
