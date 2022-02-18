
  
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
    disableStation(state_station,id_station) { 
  
        return ApiService().put(`stations/stationUpdate/${id_station}/`,state_station);
    },

    getAllIncidents() {
    
        return ApiService().get(`stations/incident/`);
    },

    createIncident(incident_info) { 
        console.log(incident_info)
        return ApiService().post(`stations/incident/`,incident_info);
    },

    createNotification(notification_info) { 
        console.log(notification_info)
        return ApiService().post(`notifications/`,notification_info);
    },

    getNotifications() {
    
        return ApiService().get(`notifications/`);
    },

    updateNotificationState(info,notification_id) { 
console.log(info)
console.log(notification_id)
        return ApiService().put(`notifications/updateState/${notification_id}/`,info);
    },
    

}
export default StationsService;