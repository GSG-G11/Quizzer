import React, { ReactNode } from 'react';
import { Formik, Form } from 'formik';

interface CustomFormProps {
  children: ReactNode;
  initialValues: object;
  validationSchema: object;
  onSubmit: (values: any) => void;
}

function CustomForm(props: CustomFormProps) {
  const {
    children, initialValues, validationSchema, onSubmit,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
}

export default CustomForm;
