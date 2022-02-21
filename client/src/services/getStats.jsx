import ApiService from './ApiService'

const StatsService = {

    getStatsRentsStations() {
    
        return ApiService().get(`rent/`);
    },
  

}
export default StatsService;