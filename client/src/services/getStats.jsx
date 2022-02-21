import ApiService from './ApiService'

const StatsService = {

    getStatsRentsStations() {
    
        return ApiService().get(`rent/`);
    },

    getStatsRentsBikes() {
    
        return ApiService().get(`rent/bikeStats`);
    },

    getStatsRentsUsers() {
    
        return ApiService().get(`rent/userStats`);
    },
  
  

}
export default StatsService;