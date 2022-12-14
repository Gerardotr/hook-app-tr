import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
      console.log('Email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input value={name} onChange={(handleInputChange)}
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off' />

            </div>
            <br />

            <div className='form-group'>
                <input value={email}
                    onChange={(handleInputChange)}
                    type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off' />

            </div>
            <br />

            <div className='form-group'>
                <input value={password}
                    onChange={(handleInputChange)}
                    type="password"
                    name="password"
                    className='form-control'
                    placeholder='Tu contraseña'
                    autoComplete='off' />

            </div>

            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}
