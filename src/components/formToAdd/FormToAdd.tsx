/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../goodsList/GoodsListSlice.slice';
import './FormToAdd.scss';

export const FormToAdd = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: '',
    name: '',
    description: '',
    price: '',
    photo: '',
    rating: '',
    stock: '',
    category: '',
  };

  const validationSchema = Yup.object({
    id: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    photo: Yup.string().url().required('Required'),
    rating: Yup.number().required('Required'),
    stock: Yup.number().required('Required'),
    category: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addProduct(values));
    resetForm(initialValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="form-row">
            <Field placeholder="ID" className="form-field" type="text" id="id" name="id" />
            <div className="error-message"><ErrorMessage name="id" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Name" className="form-field" type="text" id="name" name="name" />
            <div className="error-message"><ErrorMessage name="name" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Description" className="form-field" type="text" id="description" name="description" />
            <div className="error-message"><ErrorMessage name="description" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Price" className="form-field" type="number" id="price" name="price" />
            <div className="error-message"><ErrorMessage name="price" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Photo URL" className="form-field" type="text" id="photo" name="photo" />
            <div className="error-message"><ErrorMessage name="photo" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Rating" className="form-field" type="number" id="rating" name="rating" />
            <div className="error-message"><ErrorMessage name="rating" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Stock" className="form-field" type="number" id="stock" name="stock" />
            <div className="error-message"><ErrorMessage name="stock" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="Category" className="form-field" type="text" id="category" name="category" />
            <div className="error-message"><ErrorMessage name="category" /></div>
          </div>
          <button
            className="bottom"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
