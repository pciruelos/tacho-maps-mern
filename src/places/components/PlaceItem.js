import React, { useState } from "react";
import Card from "../../shared/components/UIelements/Card";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIelements/Modal";
import Map from '../../shared/components/UIelements/Map';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16}/>
        </div>
        </Modal>
      <Card className="place-item__content">
        <li className="place-item">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h4>{props.address}</h4>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>View on the Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </li>
      </Card>
    </React.Fragment>
  );
};

export default PlaceItem;
