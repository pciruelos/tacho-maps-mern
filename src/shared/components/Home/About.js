import React from "react";
import {IoMdLogIn} from 'react-icons/io'
import {IoShareSocialOutline} from 'react-icons/io5'
import {FaTruckPickup} from 'react-icons/fa'
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <IoMdLogIn size={60}/>
        <h2>Login</h2>
        <p className="text-left">Create an user in just 3 simple steps. We will not ask you for crazy things and we will care about your data.
        <br/>
         Voluptatem eos asperiores ipsa perspiciatis, distinctio molestiae enim. Expedita illo amet dolore aliquid impedit?</p>
      </div>
      <div>
      <IoShareSocialOutline size={60}/>
        <h2>Share</h2>
        <p className="text-left">Share with the community about your locals spots of preferences. voluptatem rem. Voluptatem eos asperiores ipsa perspiciatis<br/> distinctio molestiae enim. Expedita illo amet dolore aliquid impedit?</p>
      </div>
      <div>
      <FaTruckPickup size={60}/>
        <h2>Collect!</h2>
        <p className="text-left">Justo go for it! no more waiting , get your food in perfect state and fight against the waste! <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, voluptatem rem. Voluptatem eos asperiores ipsa perspiciatis, distinctio molestiae enim. Expedita illo amet dolore aliquid impedit?</p>
      </div>
    </div>
  );
};

export default About;
