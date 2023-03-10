import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DeleteButton } from './DeleteButton'
import { Link } from 'react-router-dom'


export const AllProducts = props => {
const [allProducts, setAllProducts] = useState([])

useEffect(() => {
axios.get('http://localhost:5000/api/products')
    .then(all => {
    setAllProducts(all)
    })
    .catch(err => console.error(err))
}, [props.refresh])

return (
<div>
    {
    allProducts.data ?
        allProducts.data.map((item, index) =>
        <div className='ProductGroup' key={index}>
            <Link to={`/products/${item._id}`}>{item.title}</Link>
            <div>
            <Link className='EditButton' to={`/edit/${item._id}`}>Edit</Link>
            <DeleteButton id={item._id} can_redirect={false} redirect={props.redirect} />
            </div>
        </div>) :
        <p>Data's loading...</p>
    }
</div>
)
}