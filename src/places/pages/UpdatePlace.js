import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMM_PLACES = [
  {
    id: "p1",
    title: "Lugar 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed",
    imgUrl:
      "https://hunyadi.info.hu/levente/images/stories/sigplus/birds1/IMG_0759.jpg",
    address: "none",
    location: {
      lat: 55.7,
      lng: 12.57,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Lugar 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed",
    imgUrl: "https://f.nordiskemedier.dk/2esm1ipu08eqi41b_660_479.jpg",
    address: "none",
    location: {
      lat: 55.7042552,
      lng: 12.5773591,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Lugar 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed",
    imgUrl:
      "https://hunyadi.info.hu/levente/images/stories/sigplus/birds1/IMG_0759.jpg",
    address: "netto ostrebrogade",
    location: {
      lat: 55,
      lng: 12,
    },
    creator: "u1",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placesdId;

  const [formState, InputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifieldPlace = DUMM_PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifieldPlace) {
        setFormData(
          {
            title: {
              value: identifieldPlace.title,
              isValid: true,
            },
            description: {
              value: identifieldPlace.description,
              isValid: true,
            },
          },
          true
        );
    } 
  }, [setFormData, identifieldPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifieldPlace) {
    return <div className="center">could not find</div>;
  }
  if (!formState.inputs.title.value) {
    return (
      <div className="center">
        <h2>loading....</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Insert the title here please"}
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={"Insert the description here please"}
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disable={!formState.isValid}>
        Update
      </Button>
    </form>
  );
};

export default UpdatePlace;
