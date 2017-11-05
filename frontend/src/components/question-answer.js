import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import QuestionForm from './question-form'
import { fetchData } from '../actions'


const Box = styled.div`
  text-align: center;
  font-size: 40px;
  padding: 5rem;
`;

const QuestionBox = styled.div`
  clear: both;
  text-align: left;
  margin-top: 5rem;
`;

const AnswerBox = styled.div`
  text-align: left;
  font-size: 20px;
`;


class QA extends Component {

  componentDidMount () {
    this.props.fetchData();
  }

  render() {
    return (
      <Box>
        <div>Got any question? shoot!</div>
        <QuestionForm />
        { this.props.posts.map( p => (
          [<QuestionBox>{p.question}</QuestionBox>, <AnswerBox>{p.answer}</AnswerBox>]
        ))}
      </Box>
    )
  }
}

QA.propTypes = {
  posts: React.PropTypes.array.isRequired,
  fetchData: React.PropTypes.func.isRequired
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


const VisibleQA = connect(
  mapStateToProps,
  { fetchData }
)(QA)

export default VisibleQA