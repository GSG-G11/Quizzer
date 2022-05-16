import React, { ReactNode } from 'react';
import { Formik, Form } from 'formik';

interface CustomFormProps {
  children: ReactNode;
  initialValues: object;
  validationSchema: object;
  enableReinitialize?: boolean;
  onSubmit: (values: any) => void;
}

function CustomForm(props: CustomFormProps) {
  const {
    onSubmit,
    children,
    initialValues,
    validationSchema,
    ...rest
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...rest}
    >
      <Form>{children}</Form>
    </Formik>
  );
}

CustomForm.defaultProps = {
  enableReinitialize: true,
};

export default CustomForm;
