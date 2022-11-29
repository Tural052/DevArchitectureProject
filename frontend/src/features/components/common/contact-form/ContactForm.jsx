import React from 'react';
import { Form, FormGroup, Button, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import styles from './../common.module.css';

const ContactForm = ({ handleSubmit, isBlackBG, pristine, submitting }) => {
  return (
    <div className={`${styles.contact_us_container} ${isBlackBG ? styles.bg_dark_gradient : styles.bg_gradient}`}>
      <div>
        <h3>
          Nəyi gözləyirsən?{' '}
          <span> biz sizə biznesinizin inkişafında kömək etmək, və suallarınızı cavablandırmaq üçün buradayıq.</span>
        </h3>
      </div>
      <div>
        <Form className={`${styles.form_container}`} onSubmit={handleSubmit}>
          <Row className="">
            <Col xs="6">
              <FormGroup>
                <Field component="input" type="text" name="fullName" className="form-control" placeholder="Ad Soyad" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Field component="input" type="email" name="email" className="form-control" placeholder="Email Adres" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Field
                  component="input"
                  type="email"
                  name="email-confirm"
                  className="form-control"
                  placeholder="Email Adres Təkrar"
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Field
                  component="input"
                  type="text"
                  name="title"
                  className="form-control focus"
                  placeholder="Movzu başlığı"
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Field
                  component="textarea"
                  name="message"
                  className="form-control"
                  placeholder="Mesaj Mətniniz..."
                  rows={8}
                  maxLength="500"
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Button type="submit" disabled={pristine || submitting}>
                  Göndər
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'contact'
})(ContactForm);
