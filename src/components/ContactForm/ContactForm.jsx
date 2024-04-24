import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "To short!")
      .max(50, "To long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "To short!")
      .max(50, "To long!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <div className={css.addCont}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="myForm">
          <label>
            <span>Name:</span>
            <br />
            <Field type="text" id="name" name="name" autoComplete="on" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <br />
          <label>
            <span>Number:</span>
            <br />
            <Field type="text" id="number" name="number" autoComplete="on" />
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>
          <br />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
