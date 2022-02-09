import React from "react";
import ListStations from "../../components/client/liststations";
 import { useBikes } from "../../hooks/useBikes"; 
import { useStations } from "../../hooks/useStations";


export default function Stations() {

  const {stations} = useStations()
 

    return (
      <ListStations stations={stations}/>
    );
  }