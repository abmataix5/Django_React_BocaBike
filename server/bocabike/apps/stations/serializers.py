from rest_framework import serializers
from django.db import models

from .models import Station


class StationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'location',
            'available_bikes',
            'state',
        )
        model = Station 