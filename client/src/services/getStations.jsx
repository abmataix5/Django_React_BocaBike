
  
import ApiService from './ApiService'

const StationsService = {

    getAllStations() {
    
        return ApiService().get(`stations/`);
    },

    getOneStation(name) { 
        return ApiService().get(`stations/${name.name}/`);
    },

    rentBike(rent_info) { 
        return ApiService().post(`rent/`,rent_info);
    },

    updateSlotRent(slot,id_slot) { 
        console.log(id_slot)
        return ApiService().put(`stations/slotUpdate/${id_slot}/`,slot);
    },


    

}
export default StationsService;