import React, { useState } from 'react'
import { FormSubmit } from '../components/FormSubmit'
import { AllProducts } from '../components/AllProducts'

const Landing = () => {
const [isSubmitted, setIsSubmitted] = useState(false)

const refresh = () => {
setIsSubmitted(!isSubmitted)
}

return (
<div className='container'>
    <h1>Create a Product</h1>
    <FormSubmit refresh={refresh} />
    <AllProducts refresh={isSubmitted} redirect={refresh} />
</div>
)
}
export default Landing;