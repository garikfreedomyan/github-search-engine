import React from 'react';

import './error-indicator.scss';
import errorImg from './error-glitch.gif'

const ErrorIndicator = () => {
   return(
      <div className="error-indicator">
         <img className="error-indicator__image" src={errorImg} alt="error message" />
         <h2 className="error-indicator__title">Something went wrong, please refresh the page</h2>
      </div>
   );
};

export default ErrorIndicator;