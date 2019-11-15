import React from 'react';
import useForm from 'react-hook-form';
import { Contact } from './App';
import ImageSelectPreview from 'react-image-select-pv';

interface Props {
  onSubmit: (data: Partial<Contact>) => void;
  contact: Contact;
}

export function Form(props: Props) {
  const { onSubmit, contact } = props;
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);

  return (
    // @ts-ignore
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact details</h2>
      <select defaultValue={contact.gender} name="gender" ref={register}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="text"
        defaultValue={contact.name.first}
        placeholder="First Name"
        name="firstName"
        ref={register}
      />
      <input
        type="text"
        defaultValue={contact.name.last}
        placeholder="Last Name"
        name="lastName"
        ref={register}
      />
      <input
        type="email"
        defaultValue={contact.email}
        placeholder="Email"
        name="email"
        ref={register}
      />

      <input type="submit" />
    </form>
  );
}
