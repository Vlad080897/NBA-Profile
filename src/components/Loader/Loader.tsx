/* eslint-disable arrow-body-style */
import React from 'react';
import loader from '../../images/loader.svg';
import './Loader.css';

const Loader: React.FC<ILoaderPropsType> = ({ status }) => {
  return (
    <img className="loader" src={status ? loader : null} alt="Context is loading..." />
  );
};

export default Loader;

type ILoaderPropsType = {
  status: boolean
};
