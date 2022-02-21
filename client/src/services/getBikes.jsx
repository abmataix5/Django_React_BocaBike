
import ApiService from './ApiService'

const BikesService = {

    getAllBikes() {
    
        return ApiService().get(`bikes/`);
    },
  

}
export default BikesService;