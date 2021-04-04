import { useState, useEffect } from 'react';
import validateInfo from './ValidateForm';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    phoneno:'',
    profession:'',
    interest:'',

  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  //const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
setErrors(validateInfo(values))
    //setErrors(validate(values));
    setIsSubmitting(true);
  };

  //useEffect(
    //() => {
      //if (Object.keys(errors).length === 0 && isSubmitting) {
        //callback();
      //}
    //},
    //[errors]
  //);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;