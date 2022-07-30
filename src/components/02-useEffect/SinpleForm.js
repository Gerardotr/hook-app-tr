import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SinpleForm = () => {

    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        //console.log('Hey!')
    }, []);

    useEffect(() => {
       // console.log('Form state cambio!')
    }, [formState]);

    useEffect(() => {
        //console.log('email cambio!')
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }

    return (
        <>
            <h1>useEffect</h1>
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

            {(name == '123') && <Message />}
        </>
    )
}
