from rest_framework import serializers
from django.db import models

from .models import Bike

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'station',
            'state',
        )
        model = Bike
