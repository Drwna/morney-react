import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 60px;
    background: transparent;
    border: none;

`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;

  return (
    <Wrapper>
      <span>{props.label}</span>
      <input {...rest}/>
    </Wrapper>
  );
};

export {Input};
