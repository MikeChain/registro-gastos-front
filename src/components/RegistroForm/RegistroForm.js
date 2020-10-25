import React from 'react';
import { useForm } from '../../hooks/useForm';
import './RegistroForm.scss';

const now = new Date()
const initValues = {
  type: 'egreso',
  account: 'cuenta3',
  category: 'prueba',
  subcategory: 'prueba',
  date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
  time: '00:00',
  concept: '',
  ammount: 0
}

export const RegistroForm = () => {

  const [values, handleInputChange, reset] = useForm(initValues);

  const { type, account, category, subcategory, date, time, concept, ammount } = values;

  return (
    <form className='registro-form'>
      <div className='registro-form__one'>
        <label htmlFor='type'>
          Tipo de Movimiento
        </label>
        <select name='type' onChange={handleInputChange} value={type}>
          <option value='ingreso'>Ingreso</option>
          <option value='egreso'>Egreso</option>
        </select>
      </div>

      <div className='registro-form__two'>
        <label htmlFor='account'>Cuenta Afectada</label>
        <select name='account' onChange={handleInputChange} value={account}>
          <option value='cuenta1'>Cuenta1</option>
          <option value='cuenta2'>Cuenta2</option>
          <option value='cuenta3'>Cuenta3</option>
        </select>
      </div>

      <div className='registro-form__two'>

        <label htmlFor='ammount'>Cantidad</label>
        <input type='number' name='ammount' onChange={handleInputChange} value={ammount} />
      </div>

      <div className='registro-form__one'>
        <label htmlFor='concept'>Concepto</label>
        <input type='text' name='concept' onChange={handleInputChange} value={concept} />
      </div>

      <div className='registro-form__two'>
        <label htmlFor='category'>Categoria</label>
        <select name='category' onChange={handleInputChange} value={category}>
          <option value='prueba'>Categoria1</option>
          <option value='pruebas'>Categoria2</option>
        </select>
      </div>

      <div className='registro-form__two'>
        <label htmlFor='subcategory'>Subcategoría</label>
        <select name='subcategory' onChange={handleInputChange} value={subcategory}>
          <option value='prueba'>Subcategoria1</option>
          <option value='pruebas'>Subcategoria2</option>
        </select>
      </div>

      <div className='registro-form__two'>
        <label htmlFor='date'>Fecha del movimiento</label>
        <input type='date' name='date' onChange={handleInputChange} value={date} />
      </div>

      <div className='registro-form__two'>
        <label htmlFor='time'>Hora del movimiento</label>
        <input type='time' name='time' onChange={handleInputChange} value={time} />
      </div>

      <button type='submit'>Guardar</button>

      <button onClick={e => {
        e.preventDefault();
        reset();
      }}>Limpiar</button>
    </form>
  )
}
