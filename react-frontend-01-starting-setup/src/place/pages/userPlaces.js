import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../component/placeList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scraper in the world!!",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Empire_State_Building%2C_New_York%2C_NY.jpg/892px-Empire_State_Building%2C_New_York%2C_NY.jpg?20170925013113",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: "40.7484405",
            lng:"-73.9878584"
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "One of the most famous sky scraper in the world!!",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Empire_State_Building%2C_New_York%2C_NY.jpg/892px-Empire_State_Building%2C_New_York%2C_NY.jpg?20170925013113",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: "40.7484405",
            lng:"-73.9878584"
        },
        creator: "u2",
    }
]
const UserPlaces = () => {
  const  userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator === userId)
  return <PlaceList items={loadedPlaces} />
  
};
export default UserPlaces;
