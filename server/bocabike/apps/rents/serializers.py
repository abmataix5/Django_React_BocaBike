from pickle import TRUE
from rest_framework import serializers
from django.db import models
from bocabike.apps.profiles.serializers import ProfileSerializer
from .models import Rent
from bocabike.apps.bikes.serializers import BikeSerializer
from bocabike.apps.stations.serializers import StationSerializer
from bocabike.apps.profiles.models import Profile
from bocabike.apps.bikes.models import Bike
from bocabike.apps.stations.models import Station
from rest_framework.exceptions import NotFound

class RentSerializer(serializers.ModelSerializer):

    user = ProfileSerializer(read_only = True)
    bike = BikeSerializer(read_only = True)
    station = StationSerializer(read_only = True)
 
    class Meta:
        fields = (
            'user',
            'bike',
            'station'
       
        )
        model = Rent


    def to_stats_stations(instance):
        return {
            'id': instance.id,
            'rents': instance.rents,
            'name_stat': instance.name_stat
        }
    

    def GetStatsMoreStationRent():

        
        queryset = Rent.objects.raw("SELECT stations_station.name as name_stat,rents_rent.station_id as id, COUNT(*) as rents FROM rents_rent,stations_station where rents_rent.station_id = stations_station.id GROUP BY rents_rent.station_id ORDER BY rents DESC")
            
        serialized_stats = []
       
        for stat in queryset.iterator():
            stats_s = RentSerializer.to_stats_stations(stat)
            serialized_stats.append(stats_s)

        return serialized_stats




    def to_stats_bikes(instance):
        return {
            'id': instance.id,
            'rents': instance.rents,
            'name_stat': instance.id
        }
    

    def GetStatsMoreBikeRent():

       
       
        queryset = Rent.objects.raw("SELECT rents_rent.bike_id as id, COUNT(*) as rents FROM rents_rent GROUP BY rents_rent.bike_id ORDER BY rents DESC LIMIT 5")
            
        serialized_stats = []
 
        for stat in queryset.iterator():
            stats_s = RentSerializer.to_stats_bikes(stat)
            serialized_stats.append(stats_s)

        return serialized_stats


    def to_stats_user(instance):
        return {
            'id': instance.id,
            'rents': instance.rents,
            'name_stat': instance.name_stat
        }
    

    def GetStatsMoreUserRent():

       
       
        queryset = Rent.objects.raw("SELECT authentication_user.username as name_stat,rents_rent.user_id as id, COUNT(*) as rents FROM rents_rent,authentication_user where rents_rent.user_id = authentication_user.id GROUP BY rents_rent.user_id ORDER BY rents DESC")
            
        serialized_stats = []
 
        for stat in queryset.iterator():
            stats_s = RentSerializer.to_stats_user(stat)
            serialized_stats.append(stats_s)

        return serialized_stats
       

    def create(self, validated_data):
  

        try:
            id_user = self.context['user']
            user = Profile.objects.get(id= id_user)
        
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        try:
            id_bike = self.context['bike']
            bike = Bike.objects.get(id= id_bike)
        except Bike.DoesNotExist:
             raise NotFound('No existe bici con ese id')

        try:
            id_station = self.context['station']
            station = Station.objects.get(id= id_station)
        
        except Station.DoesNotExist:
             raise NotFound('No existe usuario con ese id')
             


        rent = Rent.objects.create(user=user, bike=bike,  station=station)

        return rent