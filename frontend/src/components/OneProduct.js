import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState} from 'react'
import { DeleteButton } from './DeleteButton'


export const OneProduct = () => {
    const { id } = useParams()
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .the(response => setOneProduct(response.data))
    }, [])
    
    return (
        <div className=''>
            <h1>{oneProduct.product}</h1>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <DeleteButton id={id} can_redirect={true} />

        </div>
    )
}
