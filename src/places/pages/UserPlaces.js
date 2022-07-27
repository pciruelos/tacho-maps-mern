import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMM_PLACES = [
  {
    id:'p1',
    title:'SuperBrugsen Code Secret',
    description: 'You have to enter for Griffenfeldsgade and the secret code is doing a square with the numbers starting from the 9 and finising at 8 ;)',
    imgUrl:'https://res.cloudinary.com/dhoebryld/image/upload/v1658952488/tacho/1_kwtvxi.png',
    address:'Nørrebrogade 53 B, 2200 København N',
    location: {
      lat: 55.689566129093535,
      lng: 12.555845577541024
    },
    creator:'u1',
  },
  {
    id:'p2',
    title:'Fakta Perfect Deal',
    description: 'only one dump outside behaind fakta. good level.',
    imgUrl:"https://res.cloudinary.com/dhoebryld/image/upload/v1658952758/tacho/2_vk2yjd.png",
    address:'Sallingvej 60, 2720 København',
    location: {
      lat: 55.69297661941781,
      lng:  12.500195139794025
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