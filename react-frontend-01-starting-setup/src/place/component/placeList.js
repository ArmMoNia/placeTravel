import React from "react";
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from "./placeItem";
import './placeList.css'

const PlaceList = (props) => {
  if(props.items.length === 0){
    return <div className="place-list center">
        <Card className="place-list">
            <h2>No places found. May be create one?</h2>
            <button>Share Place</button>
        </Card>
    </div>
  }
  
  return <ul className="place-list">
    {props.items.map((place)=>{
        return (<PlaceItem key={place.id} 
            id={place.id} image={place.imageUrl} title={place.title} description={place.description}
            address={place.address} createId={place.creator} coordinated={place.location} 
         />)
    })}
  </ul>
};
export default PlaceList;
