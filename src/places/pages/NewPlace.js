import React from 'react';
import {useForm} from '../../shared/hooks/form-hook'

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import "./PlaceForm.css";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";


const NewPlace = () => {

  const [formState, InputHandler] = useForm({
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },false
  );
  
  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs)
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        placeholder="Insert a title to continue"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Insert the title here please"}
        onInput={InputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        placeholder="Insert a text to continue"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={"You mus enter at least 5 words to procced"}
        onInput={InputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        placeholder="Insert an address to continue"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Insert the address here please"}
        onInput={InputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
