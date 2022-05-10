import React, { ReactNode } from 'react';
import { Formik, Form } from 'formik';

interface CustomFormProps {
  children: ReactNode;
  initialValue: object;
  validationSchema: object;
  onSubmit: (values: object) => void;
}

function CustomForm(props: CustomFormProps) {
  const {
    children, initialValue, validationSchema, onSubmit,
  } = props;

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
}

export default CustomForm;
