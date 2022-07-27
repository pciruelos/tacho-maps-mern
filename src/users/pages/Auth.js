import React, { useState,useContext } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import {AuthContext} from '../../shared/context/auth-context'

import "./Auth.css";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIelements/Card";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../shared/util/validators";


const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  const switchModeHandler = () => { 
    if (!isLoginMode) {
        setFormData({
            ...formState.inputs,
            name:undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
        setFormData({
            ...formState.inputs,
            name: {
                value:'',
                isValid: false
            }
        }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
   };

  const [formState, InputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? 'Login Form' : 'Sing Up Form'}</h2>
      <hr />

      <form onSubmit={submitHandler}>
      {!isLoginMode && <Input element="input" id="name" type="text" label="Your Name" validators={[VALIDATOR_REQUIRE()]} errorText={"Insert a valid username here"} onInput={InputHandler} /> }
        <Input
          id="email"
          element="input"
          type="email"
          label="Email here :)"
          onInput={InputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText={"Insert a valid email here"}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          onInput={InputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={"Insert more characteres"}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'Login' : 'SING UP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {isLoginMode ? 'Dont have an account? SING UP' : 'you already have an account, Go LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
