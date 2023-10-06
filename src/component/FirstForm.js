import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

const FirstForm = ({formData, setFormData}) => {
  const {register, handleSubmit, formState: { errors }} = useForm({mode:'onTouched', reValidateMode: 'onChange'});

  const onSubmit = (data) => console.log(data); 
  return (
    <>
      <div className='formOuterBlock'>
       <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
            <input required type="text" className={`form-control formField ${errors.fName ? "errorFormField" : ""}`} placeholder="First Name" name="fName" {...register('fName', { required: true })} id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.fName} onChange={(ev) => setFormData({...formData, fName: ev.target.value})} required/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          {errors.fName && <p className='passwdInformation formErrorMsg'>Don't Empty</p>}
      </div>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
        <input type="text" className={`form-control formField ${errors.lName ? "errorFormField" : ""}`} placeholder="Last Name" name="lName" {...register('lName', { required: true })} id="exampleInputPassword1" value={formData.lName} onChange={(ev) => setFormData({...formData, lName: ev.target.value})}/>
        {errors.lName && <p className='passwdInformation formErrorMsg'>Don't Empty</p>}
      </div>
      </form>
      </div>
    </>
  )
}

export default FirstForm;
