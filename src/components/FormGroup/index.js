import React from 'react'
import styled from 'styled-components'

const FormGroup = (props) => {
  const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  `

  const Input = styled.input`
    border: none;
    border-bottom: 1px solid rgba(145, 71, 255, 0.2);
    height: 24px;
    padding: 0 5px;
    transition: 0.3s ease all;
    &:focus {
      border-bottom: 1px solid rgba(145, 71, 255, 0.8);
    }
    &:focus ~ label,
    &:valid ~ label {
      letter-spacing: 1px;
      top: -15px;
      font-size: 10px;
    }
  `
  const Label = styled.label`
    letter-spacing: 1.5px;
    text-transform: uppercase;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    font-size: 12px;
    transition: 0.3s ease all;
  `
  return (
    <FormGroup>
      <Input id={props.inputName} name={props.inputName} value={props.value} required onChange={props.onChange} />
      <Label htmlFor={props.inputName}>{props.label}</Label>
    </FormGroup>
  )
}

export default FormGroup
