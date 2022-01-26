from rest_framework import serializers
from django.db import models

from .models import Station,Slot


class StationSerializer(serializers.ModelSerializer):

 
    class Meta:
        fields = (
            'id',
            'name',
            'location',
            'available_bikes',
            'state',
            'image_url',
            'bikes'
        
        )
        model = Station 



class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'station',
            'id_bike',
       
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
            'state',
            'image_url',
            'bikes',
            'slots',
       
        )
        model = Station 