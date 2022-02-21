
import ApiService from './ApiService'

const BikesService = {

    getAllBikes() {
    
        return ApiService().get(`bikes/`);
    },
  
    deleteBike(id_bike) {
    
        return ApiService().delete(`bikes/admin/${id_bike}`);
    },
  

}
export default BikesService;