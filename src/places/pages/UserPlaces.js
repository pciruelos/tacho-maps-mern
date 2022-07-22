import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMM_PLACES = [
  {
    id:'p1',
    title:'Lugar 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed',
    imgUrl:'https://hunyadi.info.hu/levente/images/stories/sigplus/birds1/IMG_0759.jpg',
    address:'none',
    location: {
      lat: 55.70,
      lng: 12.57
    },
    creator:'u1',
  },
  {
    id:'p2',
    title:'Lugar 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed',
    imgUrl:"https://f.nordiskemedier.dk/2esm1ipu08eqi41b_660_479.jpg",
    address:'none',
    location: {
      lat: 55.7042552,
      lng: 12.5773591
    },
    creator:'u2',
  },
  {
    id:'p3',
    title:'Lugar 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus! Provident dolorum accusantium ab sed',
    imgUrl:'https://hunyadi.info.hu/levente/images/stories/sigplus/birds1/IMG_0759.jpg',
    address:'netto ostrebrogade',
    location: {
      lat: 55,
      lng: 12
    },
    creator:'u1',
  },

]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMM_PLACES.filter(p => p.creator === userId);
  return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces   