import React from 'react'
import {Field, reduxForm, Form} from 'redux-form'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button } from '../style'
import { sendEmail } from '../actions'


const InputField = styled(Field)`
  font-family: inherit;
  font-size: 20px;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const TextAreaField = styled(Field)`
  width: 100%;
  height: 10rem;
  font-family: inherit;
  font-size: 20px;
  padding: 0.5rem;
`;

const SendButton = styled(Button)`
  float: right;
`;


const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined


function mapStateToProps (state) {
  return {
    initialValues: {
      email: '',
      question: ''
    }
  };
}

const FormComponent = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <InputField
          name="email"
          component='input'
          type="email"
          validate={email}
          placeholder="Type your email here"
          required />
      </div>
      <div>
        <div>
          <TextAreaField
            name="question"
            component='textarea'
            placeholder="What would you like to ask ? "
            required />
        </div>
      </div>
      <div>
        <SendButton type="submit">Send</SendButton>
      </div>
    </Form>
  )
};


const QuestionForm = reduxForm({
  form: 'questionForm', // a unique identifier for this form
  onSubmit: (values, dispatch, props) => {
    sendEmail(values);
  }
})(FormComponent)



export default QuestionForm