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