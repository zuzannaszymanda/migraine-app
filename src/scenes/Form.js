import React, {Component} from 'react';
import styled from 'styled-components';
import { Route, Switch } from "react-router-dom";

import Button from '../components/Button'
import Header from '../components/Header';
import {
  Start,
  End,
  Menstruation,
  Localization,
  Mood,
  Pain,
  Medicines,
  Triggers
} from './form/AddForm';


const RecordForm = styled.article`
  h2 {
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }
`

const Buttons = styled.div `
  position: fixed;
  bottom: 0;
  display: flex;
  width: 90%;
  max-width: 860px;
  justify-content: space-between;
  align-items: center;
  > button {
    min-width: auto;
    font-size: 1rem;
    padding: 10px 15px;
    background-color: #f0908b80;
    boxShadow: "0px 1px 12px 0px rgba(0,0,0,0.5);
  }
  > button:hover {
    background-color: #f0908b;
  }
`
const Hello = () => (<h1>Record new Migraine</h1>)
const Bye = () => (<h1>Added new Migraine</h1>)

const Form = () => {
  let n = 0;
  return (
    <RecordForm className="Form">
      <Header />
      <form>
      {  n == 1 ?  <Start /> : <Hello /> }
      </form>
      <Buttons>
        <Button style={style} text='<'/>
        <p> Migraine Record</p>
        <Button style={style} text=">"/>
      </Buttons>
    </RecordForm>
  );
}

/*
<Hello />
<Start />
<End />
<Pain />
<Mood />
<Medicines />
<Localization />
<Menstruation />
<Triggers />
<Bye />
*/


export default Form;
