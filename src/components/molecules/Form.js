import React, { useState } from 'react';
import Checked from '../../icons/Checked';
import Cross from '../../icons/Cross';
import './Form.css'

const initForm = {
  title: '',
  waist: '',
  price: '',
  category: '',
};

const Form = ({ addData, showForm, setShowForm, blob }) => {

  const [isSending, setIsSending] = useState(false)
  const [form, setForm] = useState(initForm)

  const handleFormCancel = () => {
    setShowForm(false)
    setIsSending(false)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    addData(form)
    e.preventDefault()
    setIsSending(true)
  }

  return (
    <>
      {
        showForm && blob &&
        <form className='molecules__form' onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              type='text'
              placeholder='Título'
              name='title'
              value={form.title}
              onChange={handleChange}
              autoFocus
            >
            </input>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value=''>Categorias</option>
              <option value='tshirts'>Remeras</option>
              <option value='sweatshirts'>Buzos</option>
              <option value='jackets'>Camperas</option>
              <option value='joggins'>Joggins</option>
              <option value='jeans'>Jeans</option>
              <option value='swimsuits'>Mallas</option>
              <option value='dresses'>Vestidos</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              type='text'
              placeholder='Precio'
              name='price'
              value={form.price}
              onChange={handleChange}
            >
            </input>
            <input
              type='text'
              placeholder='Talle'
              name='waist'
              value={form.waist}
              onChange={handleChange}
            >
            </input>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={handleFormCancel}>
              <Cross color='#000' />
            </div>
            <div style={{
              position: 'relative',
              width: '1em',
              height: '1em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '1em'
            }}>
              <button
                style={{
                  position: 'relative',
                  zIndex: '20',
                  filter: 'opacity(0)',
                  width: '1em',
                  height: '1em',
                }}
                type='submit'></button>
              <Checked color='#000' />
            </div>
          </div>
        </form>
      }
      {
        isSending &&
        <h4>Enviando datos...</h4>
      }
    </>
  )
};

export default Form;