// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './biznis.module.css';
import { Form, FormGroup, Button, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const BusinessModel = ({ renderedIndustries, handleSubmit, pristine, submitting }) => {
  const navigate = useNavigate();

  const handleRouting = (paramsIndustryLink) => {
    navigate(paramsIndustryLink);
  };

  const rendered = renderedIndustries.map((industry) => {
    return (
      <div className={`${styles.services_item} p-4 text-center`} key={industry.id}>
        <h3
          style={{
            color: '#8cb1f3',
            fontSize: '1rem',
            marginBottom: '15px'
          }}
        >
          {' '}
          {industry.name}
        </h3>
        <button className="btn text-dark" onClick={() => handleRouting(industry.link)}>
          Daha çox
        </button>
      </div>
    );
  });

  return (
    <div className={`${styles.background}`}>
      <div className="w-50">
        <h4
          className="text-center h3"
          style={{
            color: '#8cb1f3'
          }}
        >
          Dəstək üçün bizə yazın!
        </h4>
        <Form
          className={`${styles.form_container} w-100`}
          style={{
            paddingTop: '10px'
          }}
          onSubmit={handleSubmit}
        >
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
                <Button type="submit" block disabled={pristine || submitting}>
                  Göndər
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={`${styles.services_container}`}>
        <h4 className="text-white text-center h3">Sizin biznes istiqamətiniz?</h4>
        <div className={`${styles.services_parent_overflow_container} d-flex justify-content-center flex-wrap`}>
          {rendered}
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'contact'
})(BusinessModel);
