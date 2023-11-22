import React, { useState } from 'react'
import Logo from './../images/Logo.png'
import footerFirst from './../images/footerFirst.png'
import footerSecond from './../images/footerSecond.png'
import api from '../api/api'
import { useHistory, useLocation } from 'react-router-dom'
import { clientSchema } from '../validations/clientValidations'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import OpenTermsAndConditionsPDF from '../components/TermsAndConditions'

export const ClientForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isOwner, setIsOwner] = useState(true)
  const history = useHistory()

  const location = useLocation().search
  const pdfId = location.slice(4)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(clientSchema)
  })
  const onSubmit = () => {
    const data = {
      client: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        is_owner: isOwner
      },
      pdfId: {
        pdf_id: pdfId
      }
    }
    api.post('/clients', data).catch((error) => {
      console.log(error)
    })
    history.push(`/downloading/${location}`)
  }

  return (
    <div>
      <div className='wrapper'>
        <img src={Logo} alt='logo.png' className='logo' />
        <form onSubmit={handleSubmit(onSubmit)} className='user__form'>
          <input
            {...register('firstName')}
            type='text'
            value={firstName}
            placeholder='First name..'
            className='form__item'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            {...register('lastName')}
            type='text'
            value={lastName}
            placeholder='Last name'
            className='form__item'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            {...register('phone')}
            type='text'
            value={phone}
            placeholder='Phone number'
            className='form__item'
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className='error_message'> {errors.phone?.message}</span>
          <input
            {...register('email')}
            type='text'
            value={email}
            placeholder='Email'
            className='form__item'
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className='error_message'> {errors.email?.message}</span>
          <div className='owner'>
            <div className='owner__question'>Are you the owner? </div>
            <div className='radio-toolbar'>
              <div className='radioInput'>
                <input
                  type='radio'
                  id='yes'
                  name='radiobutton'
                  value={isOwner}
                  onChange={() => setIsOwner(true)}
                  checked={isOwner === true}
                />
                <label htmlFor='yes'>Yes</label>
              </div>
              <div className='radioInput'>
                <input
                  type='radio'
                  id='no'
                  name='radiobutton'
                  value={isOwner}
                  onChange={() => setIsOwner(false)}
                  checked={isOwner === false}
                />
                <label htmlFor='no'>No</label>
              </div>
            </div>
          </div>
          <div className='conditions'>
            <input className='conditions__checkbox' type='checkbox' required />
            <OpenTermsAndConditionsPDF />
          </div>
          <button className='form__button' type='submit'>
            See appraisal
          </button>
        </form>
        <div className='footer'>
          <img src={footerSecond} alt='footer.png' className='footerSecond__img' />
          <img src={footerFirst} alt='footer.png' className='footerFirst__img' />
        </div>
      </div>
    </div>
  )
}
