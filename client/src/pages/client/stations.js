import React from "react";
import ListStations from "../../components/client/liststations";
import { useBikes } from "../../hooks/useBikes";


export default function Stations() {

  const {bikes} = useBikes()

    return (
      <ListStations bikes={bikes}/>
    );
  }