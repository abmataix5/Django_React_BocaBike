
  
import ApiService from './ApiService'

const StationsService = {

    getAllStations() {
    
        return ApiService().get(`stations/`);
    },

    getOneStation(name) { 
        return ApiService().get(`stations/${name.name}/`);
    },

    rentBike(rent_info) { 
 console.log(rent_info)
        return ApiService().post(`rent/`,rent_info);
    },

    

}
export default StationsService;