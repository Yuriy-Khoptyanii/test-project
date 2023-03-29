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
import { Product } from '../../types/Product';

type InitialValue = {
  id: string,
  title: string,
  description: string,
  price: string,
  images: string,
  rating: string,
  stock: string,
  category: string,
};

export const FormToAdd = () => {
  const dispatch = useDispatch();

  const initialValues: InitialValue = {
    id: '',
    title: '',
    description: '',
    price: '',
    images: '',
    rating: '',
    stock: '',
    category: '',
  };

  const validationSchema = Yup.object({
    id: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    images: Yup.string().url().required('Required'),
    rating: Yup.number().required('Required'),
    stock: Yup.number().required('Required'),
    category: Yup.string().required('Required'),
  });

  const onSubmit = (values: InitialValue | Product, { resetForm }: { resetForm: () => void }) => {
    dispatch(addProduct(values));
    resetForm();
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
            <Field placeholder="id" className="form-field" type="text" id="id" name="id" />
            <div className="error-message"><ErrorMessage name="id" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="title" className="form-field" type="text" id="title" name="title" />
            <div className="error-message"><ErrorMessage name="title" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="description" className="form-field" type="text" id="description" name="description" />
            <div className="error-message"><ErrorMessage name="description" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="price" className="form-field" type="number" id="price" name="price" />
            <div className="error-message"><ErrorMessage name="price" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="images" className="form-field" type="text" id="images" name="images" />
            <div className="error-message"><ErrorMessage name="images" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="rating" className="form-field" type="number" id="rating" name="rating" />
            <div className="error-message"><ErrorMessage name="rating" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="stock" className="form-field" type="number" id="stock" name="stock" />
            <div className="error-message"><ErrorMessage name="stock" /></div>
          </div>
          <div className="form-row">
            <Field placeholder="category" className="form-field" type="text" id="category" name="category" />
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
