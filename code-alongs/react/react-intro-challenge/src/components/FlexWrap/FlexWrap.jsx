import React from 'react';
import s from './FlexWrap.module.scss';

const FlexWrap = ({ children }) => {
  return <section className={s.wrap}>{children}</section>;
};

export default FlexWrap;