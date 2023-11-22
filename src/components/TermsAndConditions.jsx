import React, { Component } from 'react'
import Pdf from '../files/Privacy Policy.pdf'

class OpenTermsAndConditionsPDF extends Component {
  render() {
    return (
      <div className='App'>
        <span className='conditions__text'>
          I agree to the&#160;
          <a className='conditions__text' href={Pdf} target='_blank' rel='noreferrer'>
            Privacy Policy
          </a>
        </span>
      </div>
    )
  }
}

export default OpenTermsAndConditionsPDF
