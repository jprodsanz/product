import { useForm} from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = (data) => {
    
    const schema = yup.object().shape({
        
        username: yup.string().required("Enter your username"),
        
        lookingFor: yup.string().required("What are you looking for? "),
        
        price: yup.number().positive().integer().min(1).required("Price Range"),
        
        description: yup.string().required(),
    });
    
    const { register, handleSubmit, formState: {errors} } = useForm ({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Username...' {...register('username')}/>
                <p>{errors.username?.message}</p>
            
            <input type='text' placeholder='Looking For...' {...register('lookingFor')} />
                <p>{errors.title?.message}</p>
            
            <input type='number' placeholder='Price...' {...register('price')} />
                <p>{errors.price?.message}</p>
            
            <input type='text' placeholder='Description...' {...register('description')} />
                <p>{errors.description?.message}</p>
            
            <input type='Submit'/>
        </form>
    );
};
