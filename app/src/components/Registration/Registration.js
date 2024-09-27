import React from 'react'
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import s from './Registration.module.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Input = ({ name, placeholder, type, validate }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className={s.formGroup}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, validate)}
        className={`${s.input} ${errors[name] ? s.errorInput : ''}`}
      />
      <div>
        {errors[name] && <span className={s.errorText}>{errors[name].message}</span>}
      </div>
    </div>
  );
};

const Registration = React.memo(() => {
  const methods = useForm();
  const dispatch = useDispatch();
  const eventId = useParams();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(addUser(formData, eventId));
    navigate('/');
  }

  return (
    <>
      <Link to='/' className={s.link}>Events</Link>
      <div className={s.container}>
        <h3 style={{ padding: '0 7%' }}>Event registration</h3>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)} className={s.form}>
            <label >
              Fullname
              <Input type='text' name='fullname' placeholder='Fullname'
                validate={{
                  required: 'Fullname is required',
                  minLength: { value: 3, message: 'Fullname must be at least 3 characters' }
                }}
              />
            </label>

            <label>
              Email
              <Input type="email" name='email' placeholder='Email'
                validate={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email'
                  }
                }}
              />
            </label>

            <label>
              Date of Birth
              <br />
              <Controller
                control={methods.control}
                name='dateOfBirth'
                render={({ field }) => (
                  <DatePicker
                    placeholderText='Select date'
                    onChange={(date) => {
                      if (date) {
                        field.onChange(format(date, 'yyyy-MM-dd'));
                      } else {
                        field.onChange(null);
                      }
                    }}
                    selected={field.value}
                    required
                    className={s.input}
                  />
                )}
              />
            </label>


            <div>
              <h4 style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: '2%' }}>Where did you hear about this event?</h4>
              <div className={s.radioBtns}>
                <label>
                  <input
                    type="radio"
                    value="socialMedia"
                    {...methods.register("findOut", { required: 'Please select an option' })}
                  />
                  Social media
                </label>
                <label>
                  <input
                    type="radio"
                    value="friends"
                    {...methods.register("findOut")}
                  />
                  Friends
                </label>
                <label>
                  <input
                    type="radio"
                    value="foundMyself"
                    {...methods.register("findOut")}
                  />
                  Found myself
                </label>
              </div>

            </div>


            <button type='submit' className={s.btn}>Register</button>
          </form>

        </FormProvider>

      </div>
    </>

  )
})

export default Registration