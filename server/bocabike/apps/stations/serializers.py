from cgitb import text
from rest_framework import serializers
from django.db import models

from .models import Incident, Station,Slot
from bocabike.apps.profiles.serializers import ProfileSerializer
from bocabike.apps.profiles.models import Profile
from rest_framework.exceptions import NotFound
class StationSerializer(serializers.ModelSerializer):

    
 
    class Meta:
        fields = (
            'id',
            'name',
            'location',
            'available_bikes',
            'state',
            'image_url',
            'bikes',
            'state_station'
        
        )
        model = Station 



class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'station',
            'id_bike',
            'slot_state'
       
        )
        model = Slot 


class StationListDetailSerializer(serializers.ModelSerializer):

    slots = SlotSerializer(many= True)
    class Meta:
        fields = (
            'id',
            'name',
            'location',
            'available_bikes',
            'state_station',
            'image_url',
            'bikes',
            'slots',
       
        )
        model = Station 

class IncidentSerializer(serializers.ModelSerializer):

    user = ProfileSerializer(read_only = True)
    station = StationSerializer(read_only = True)
    class Meta:
        fields = (
            'id',
            'user',
            'station',
            'text',
            'created_at'
       
        )
        model = Incident 


    def create(self, validated_data):
  

    

        try:
            id_user = self.context['user']
            user = Profile.objects.get(id= id_user)
        
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

 

        try:
            id_station = self.context['station']
            station = Station.objects.get(id= id_station)
        
        except Station.DoesNotExist:
             raise NotFound('No existe usuario con ese id')
             
        text = self.context['text']

        incident = Incident.objects.create(user=user, station=station,text=text)

        return incident