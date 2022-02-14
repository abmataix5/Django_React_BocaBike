import React from "react";
import ListStations from "../../components/client/liststations";
 import { useBikes } from "../../hooks/useBikes"; 
import { useStations } from "../../hooks/useStations";


export default function Incidents() {

  const {stations} = useStations()
 

    return (

            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Escribe aquí la incidencia</label>
                <textarea type="textfield" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            </form>

    );
  }