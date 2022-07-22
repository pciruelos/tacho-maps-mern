import React from "react";

import Card from "../../shared/components/UIelements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>no places found for this user</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map( p => (
        <PlaceItem
          key={p.id}
          id={p.id}
          image={p.imgUrl}
          title={p.title}
          description={p.description}
          address={p.address}
          creatorId={p.creator}
          coordinates={p.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
