import React from 'react';
import { useForm } from '../../hooks/useForm';
import './Login.scss';

export const Login = () => {
  const [values, handleInputChange] = useForm(initValues);

  const { email, pass } = values;

  const submit = async (e) => {
    e.preventDefault()

    const url = 'http://localhost:8080/login';

    const data = {
      email, password: pass
    }

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    const resp = await fetch(url, params);

    if (resp.ok) {
      const body = await resp.json();
      console.log(body.token)
    } else {
      resp.text().then(console.log)
    }

  }

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={submit}>

        <h1 className='login-form__title'>Ingresar</h1>

        <div className='login-form__input'>
          <label htmlFor='type'>
            Email
        </label>
          <input type='email' name='email' onChange={handleInputChange} value={email} />
        </div>

        <div className='login-form__input'>
          <label htmlFor='type'>
            Pass
        </label>
          <input type='password' name='pass' onChange={handleInputChange} value={pass} />
        </div>

        <button type='submit' className='outline'>Entrar</button>
      </form>
    </div>
  )
}

const initValues = {
  'email': '',
  'pass': '',
}
