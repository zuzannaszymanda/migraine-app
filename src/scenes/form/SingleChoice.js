import React, {Component} from 'react';
import styled from 'styled-components';


import RadioButton from '../../components/RadioButton'

const SingleChoice = (props) => {
  const answers = props.answers;
  const items = answers.map((answer, index) => {
    return (
      <RadioButton
        text={answer}
        key={index}
        name={props.name}
        id={`${props.name}_${index}`}
        value={answer}
        onChange={props.onChange}
        color={props.color}
        img={props.img}
        imgColor={props.imgColor}
      />
    );
  })

  return (
    <div>
      <h2>{props.title}</h2>
      {items}
    </div>
  );
}

export default SingleChoice;
